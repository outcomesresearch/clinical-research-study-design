import rootTree from "./assets/rootTree"

export function findLongestPath(currentNode, steps) {
  const nodeConfig = { ...steps[currentNode] };

  // Base case: if the option has leaf=true there are no more choices
  if (!currentNode || !nodeConfig || nodeConfig.leaf) {
    return 0;
  }

  let maxLength = 0;

  // Loop through each option in the current node
  if (!nodeConfig.choices && nodeConfig.type === 'statement') {
    nodeConfig.choices = [{ next: nodeConfig.next }]
  }

  for (const option of nodeConfig.choices) {
    if (option.next) {
      // Recursive call to traverse down this path
      const pathLength = 1 + findLongestPath(option.next, steps);
      // Update maxLength if this path is longer
      maxLength = Math.max(maxLength, pathLength);
    } else {
      // This path ends here, count this node only
      maxLength = Math.max(maxLength, 1);
    }
  }

  return maxLength;
}


export function findPreviousSteps(currentStepName) {
  const currentNode = rootTree[currentStepName];
  if (!currentNode) {
    console.error("Invalid step name:", currentStepName);
    return [];
  }

  // Base case: if no inputs are present or the inputs array is empty
  if (!currentNode.inputs || currentNode.inputs.length === 0) {
    return [currentNode.id];
  }

  // Recursive case: process each input to find further previous steps
  const previousSteps = currentNode.inputs.flatMap(inputName =>
    findPreviousSteps(inputName)
  );

  // Include the current step along with all previous steps found recursively
  return [...previousSteps, currentStepName];
}