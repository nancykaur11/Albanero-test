// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34

var findKthLargest = function (nums, k) {
  if (k <= 0 || k > nums.length) {
    return undefined;
  }
  let max = nums[0];

  for (let i = 0; i < k; i++) {
    max = nums[0];

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }
    if (i < k - 1) {
      const maxIndex = nums.indexOf(max);
      nums.splice(maxIndex, 1);
    }
  }

  return max;
};
