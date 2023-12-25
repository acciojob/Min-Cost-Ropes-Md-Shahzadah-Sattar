const MinHeap = require('heap'); // You may need to install a min-heap library if your environment doesn't provide one

function mincost(arr) {
  // Initialize a min heap
  const minHeap = new MinHeap();

  // Populate the min heap with the array elements
  minHeap.init(arr);

  // Initialize the total cost
  let totalCost = 0;

  // Continue until there is only one rope left
  while (minHeap.size() > 1) {
    // Extract the two smallest ropes from the heap
    const firstRope = minHeap.pop();
    const secondRope = minHeap.pop();

    // Connect the two ropes and calculate the cost
    const newRope = firstRope + secondRope;
    totalCost += newRope;

    // Add the new rope back to the heap
    minHeap.push(newRope);
  }

  // The totalCost now represents the minimum cost to connect all ropes
  return totalCost;
}

// Example usage
console.log(mincost([4, 3, 2, 6]));  // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33

module.exports = mincost;
