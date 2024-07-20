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
