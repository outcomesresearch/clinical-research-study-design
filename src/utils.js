export function findLongestPath(currentNode, steps) {
  console.log(currentNode, steps)
  // Base case: if the current node has no options or is undefined, return length 0
  if (!currentNode || !steps[currentNode] || !steps[currentNode].options) {
    return 0;
  }

  let maxLength = 0;

  // Loop through each option in the current node
  for (const option of steps[currentNode].options) {
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
