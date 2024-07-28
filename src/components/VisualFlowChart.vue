<template>
  <div class="flow-div-ound">
    <div class="svg-container" id="flowchart-container">
      <svg class="svg-content">
        <g></g>
      </svg>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import * as dagre from "dagre";
import smalldata from "../assets/rootTree";
import * as dagred3 from "dagre-d3/dist/dagre-d3";

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
    console.log({ targetWidth });
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}

export default {
  name: "visual-flow-chart",
  data() {
    return {
      gdata: null,
      scale: 0.75,
      graph: null,
    };
  },
  created() {
    let myMap = new Map();
    // console.log(Object.values(smalldata));
    let initialdata = Object.values(smalldata).map((a) => {
      // make sure to remap 'next' key as 'choices' for one-choice steps
      if (!a.choices && a.next) return { ...a, choices: [{ next: a.next }] };
      if (!a.choices && !a.next) return { ...a, choices: [] };
      return a;
    });
    console.log(initialdata);
    // return;
    for (const i in initialdata) {
      const { id, title, choices, detail, inputs, cssClass } = initialdata[i];
      myMap.set(id, { title, choices, detail, inputs, cssClass });
    }
    this.gdata = myMap;
  },
  mounted() {
    this.render();
  },
  methods: {
    render: function () {
      if (this.gdata === null) return "no data";
      const graph = new dagred3.graphlib.Graph({}).setGraph({});
      for (const [key, value] of this.gdata.entries()) {
        console.log({ value });
        graph.setNode(key, {
          label: value.title,
          // title: value.title,
          choices: value.choices,
          detail: value.detail,
          class: value.cssClass,
        });
        value.choices.forEach((choice) => {
          console.log(choice);
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
        .attr("width", 1500)
        .attr("height", 800)
        .call(responsivefy);

      // Create the renderer object
      const render = new dagred3.render();
      // Run the renderer. This is what draws the final graph.
      render(svg, graph);

      let tooltip = d3
        .select("body")
        .append("div")
        .attr("id", "tooltip_template");

      svg
        .selectAll("g.node")
        .attr("data-detail", (v) => graph.node(v).detail)
        .on("mouseenter", () => {
          // this.highlightEdges(d, i);
          tooltip.style("visibility", "visible");
        })
        .on("mousemove", function () {
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
      //   svg.attr("width", "100%");
      //   svg.attr("height", '100%');
      //   this.graph = inner;
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
}
.node rect,
.node circle,
.node ellipse {
  stroke: #333;
  fill: #fff;
  stroke-width: 1px;
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
  stroke: #333;
  fill: #333;
  stroke-width: 1.5px;
}

.study > rect {
  fill: lightyellow;
}

.node > rect.label-container.parent {
  fill: orange;
}

.node > rect.label-container.child {
  fill: steelblue;
}

.node > rect.label-container.selected {
  fill: gray;
}
</style>
