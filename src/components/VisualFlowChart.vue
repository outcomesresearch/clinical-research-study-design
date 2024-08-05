<template>
  <v-card class="mx-auto my-12 container" :elevation="2">
    <v-card-title>Visual Decision Tree</v-card-title>
    <v-card-item>
      <div class="svg-container" id="flowchart-container">
        <svg class="svg-content">
          <g></g>
        </svg>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
import * as d3 from "d3";
import * as dagre from "dagre";
import rootTree from "../assets/rootTree";
import * as dagred3 from "dagre-d3/dist/dagre-d3";
import { findPreviousSteps } from "../utils";

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style("width")),
    height = parseInt(svg.style("height")),
    aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("perserveAspectRatio", "xMinYMid")
    .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
    var targetWidth = parseInt(container.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}

const setLabelBackgrounds = (previousSteps) => {
  d3.selectAll(".edgeLabel").each(function (d) {
    var label = d3.select(this);

    // Get w which is the later side of the edge, if it's a previous step then
    // mark this edge with a class that it's within the "previous" path
    const { w } = d;
    var bbox = label.node().getBBox(); // Get bounding box of the label

    // Insert a rect before the text label in the DOM
    label
      .insert("rect", ":first-child")
      .attr("x", bbox.x - 2) // A small offset for padding
      .attr("y", bbox.y - 2)
      .attr("width", bbox.width + 4)
      .attr("height", bbox.height + 4)
      .style("fill", "#ffffff"); // Set background color

    label.classed("previousStep", previousSteps.includes(w));
  });
};

const setArrowColor = (previousSteps) => {
  d3.selectAll(".edgePath").each(function (d) {
    var label = d3.select(this);
    const { w } = d;
    label.classed("previousStep", previousSteps.includes(w));
  });
};

function getCssClassesForQueryParam(currentStepConfig, queryParam) {
  const { id, color } = currentStepConfig;

  // Start off with css class labeling it as currnetStep, if it is
  let className = id === queryParam ? "currentStep" : "";
  const previousSteps = rootTree[queryParam]
    ? findPreviousSteps(rootTree[queryParam].id)
    : [];

  // If this is a prerevious step, then mark it accordingly
  // If it's a previous step and it has a color, add that too
  return previousSteps.includes(id)
    ? `${className} previousStep ${color}`
    : className;
}

function getCssClasses(currentStepConfig) {
  const { color } = currentStepConfig;

  // Start off with css class labeling it as currnetStep, if it is
  let className = "";

  // If this is a prerevious step, then mark it accordingly
  // If it's a previous step and it has a color, add that too
  return `${className} ${color}`;
}

export default {
  name: "visual-flow-chart",
  props: ["step"],
  data() {
    return {
      gdata: null,
      scale: 1,
      graph: null,
    };
  },
  created() {
    let myMap = new Map();

    let initialdata = Object.values(rootTree).map((a) => {
      a = {
        ...a,
        cssClass:
          this.step && rootTree[this.step]
            ? getCssClassesForQueryParam(a, this.step)
            : getCssClasses(a),
      };
      // make sure to remap 'next' key as 'choices' for one-choice steps
      if (!a.choices && a.next) return { ...a, choices: [{ next: a.next }] };
      if (!a.choices && !a.next) return { ...a, choices: [] };
      return a;
    });

    for (const i in initialdata) {
      const { id, title, flowChartTitle, choices, detail, inputs, cssClass } =
        initialdata[i];
      myMap.set(id, {
        title: flowChartTitle || title,
        choices,
        detail,
        inputs,
        cssClass,
      });
    }
    this.gdata = myMap;
  },
  mounted() {
    this.render();
  },
  methods: {
    render: function () {
      const __router = this.$router;

      if (this.gdata === null) return "no data";

      const graph = new dagred3.graphlib.Graph({}).setGraph({});

      for (const [key, value] of this.gdata.entries()) {
        graph.setNode(key, {
          label: value.title,
          // title: value.title,
          choices: value.choices,
          detail: value.detail,
          class: value.cssClass,
        });
        value.choices.forEach((choice) => {
          graph.setEdge(key, choice.next, {
            arrowhead: "normal",
            // arrowheadStyle: "fill: #fff",
            curve: d3.curveBasis,
            label: choice.answer,
          });
        });
      }

      const svg = d3
        .select("div#flowchart-container")
        .select("svg")
        .attr("width", 1320)
        .attr("height", 800)
        .call(responsivefy);

      // Create the renderer object
      const render = new dagred3.render();
      // Run the renderer. This is what draws the final graph.
      render(svg, graph);

      const previousSteps = findPreviousSteps(this.step);
      if (previousSteps.length) svg.classed("selectionMode", true);
      setLabelBackgrounds(previousSteps);
      setArrowColor(previousSteps);

      let tooltip = d3
        .select("body")
        .append("div")
        .attr("id", "tooltip_template");

      svg
        .selectAll("g.node")
        .attr("data-detail", (v) => graph.node(v).detail)
        .on("mouseenter", () => {
          // this.highlightEdges(d, i);
          if (this.dataset && this.dataset.detail)
            tooltip.style("visibility", "visible");
        })
        .on("click", function (event) {
          svg.remove();
          tooltip.remove();
          __router.push({ path: "decision-tree", query: { step: event } });
        })
        .on("mousemove", function () {
          if (this.dataset.detail)
            tooltip
              .text(this.dataset.detail)
              .style("top", event.pageY - 10 + "px")
              .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", () => {
          d3.selectAll("rect.label-container").classed("parent", false);
          d3.selectAll("rect.label-container").classed("child", false);
          d3.selectAll("rect.label-container").classed("selected", false);
          tooltip.style("visibility", "hidden");
        })
        .selectAll("rect.label-container")
        .on("mouseenter", function () {
          d3.select(this).classed("selected", true);
        })
        .on("mouseout", function () {
          d3.select(this).classed("selected", false);
        });
      dagre.layout(graph);
    },
    highlightEdges: function (d) {
      let children = this.gdata.get(d).choices.map((A) => A.next);
      let parents = this.gdata.get(d).inputs;

      function setClass(elementSelector, className) {
        d3.select("svg")
          .selectAll("g.node")
          .filter(elementSelector)
          .select("rect.label-container")
          .classed(className, true);
      }

      if (children.length > 0) setClass((d) => children.includes(d), "child");

      const circulardp = children.filter((element) =>
        parents.includes(element)
      );

      if (parents.length > 0) setClass((d) => parents.includes(d), "parent");
      if (circulardp.length > 0)
        setClass((d) => circulardp.includes(d), "parnet");
    },
  },
};
</script>

<style>
.svg-content {
  font: 300 14px "Helvetica Neue", Helvetica;
}

#flowchart-container {
  width: 100%;
  max-width: 1500px;
}

#app .app-container .container {
  padding: 12px !important;
}

.svg-container {
  display: inline-block;
  position: relative;
  width: 100%;
  vertical-align: top;
  overflow: hidden;
}

.node {
  cursor: pointer;
}
.node text {
  pointer-events: none;
  font-weight: 500;
}

#tooltip_template {
  position: absolute;
  background-color: white;
  border: 2px solid;
  border-radius: 5px;
  padding: 5px;
  z-index: 10;
  visibility: hidden;
}
.edgePath path {
  stroke: darkgrey;
  fill: darkgrey;
  stroke-width: 1.5px;
}

rect {
  stroke-width: 2px;
  fill: #fff;
}
text {
  fill: darkgrey;
}

/* color of node and text for nodes that dont have 'colors' prop in JSON */
.previousStep rect {
  fill: #ededed;
}
.previousStep text {
  fill: #525252;
  font-weight: 500;
}

.previousStep.edgePath path {
  stroke: #2d2d2d;
  fill: #2d2d2d;
  stroke-width: 1.5px;
}

/* Observational study styles */
.green-lighten-2 > rect {
  fill: #eff8f0;
}
.green-lighten-2 text {
  fill: #82c684;
}

/* Analytical / Descriptive study styles */
.green-darken-2 > rect {
  fill: #e7f1e7;
}
.green-darken-2 text {
  fill: #509b53;
}

/* Leaf styles for observational / analytical / descriptive */
.teal-darken-4 > rect {
  fill: #dfe9e8;
}
.teal-darken-4 text {
  fill: #004d3f;
}

/* Experimental study styles */
.blue-lighten-2 > rect {
  fill: #ebf6fe;
}
.blue-lighten-2 text {
  fill: #67b7f6;
}

/* Analytical / Descriptive study styles */
.blue-darken-2 > rect {
  fill: #e3eefa;
}
.blue-darken-2 text {
  fill: #1976d2;
}

/* Leaf styles for observational / analytical / descriptive */
.indigo-darken-4 > rect {
  fill: #e3e4ef;
}
.indigo-darken-4 text {
  fill: #1f2881;
}
</style>
