// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function (nums) {
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    if (nums[0] === 0) {
      return "0";
    }
    return nums.join("");
  };
  