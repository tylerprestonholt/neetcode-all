//READ PROMPT OUT LOUD
//RE-READ PROMPT TO SELF
//GIVE HIGH LEVEL UNDERSTANDING
//CONFIRM UNDERSTANDING
//IDENTIFY INPUTS, OUTPUTS, CONSTRAINTS, AND EDGE CASES
//ASK CLARIFYING QUESTIONS
//GIVE HIGH LEVEL APPROACH
//CONFIRM OPINION ON APPROACH
//START CODING

//input: array of nums - empty?
//output: boolean - does input include a duplicate num?
//constraints: none
//edge: can input array be empty? ASSUME NO

//approach 1: look at each num in array and use hash table to keep track of existing nums
//time: O(n) space: O(n)

//approach 2: sort input array and compare each num to next, non-distinct nums will be adjacent
//time: O(nlog(n)) space: O(1)

//approach 3: create set with input array and compare set size with array length
//time: O(n) space: O(n)

/**
 * @param { number[] } nums - list of numbers
 * @return { boolean } dooes input list include at least one duplicate number?
 */
const containsDuplicate = function (nums) {
  //return false for singleton input
  if (nums.length === 1) return false;
  //create hash table to track counts
  const counts = {};
  //loop over input array
  for (const num of nums) {
    //check hash for number, if exists return true
    if (num in counts) return true;
    //otherwise add num to hash with count 1
    counts[num] = 1;
  }
  //return false if looping completes
  return false;
};

/**
const containsDuplicate = function (nums) {
  //return false for singleton input
  if (nums.length === 1) return false;
  //return comparison for tuple input
  if (nums.length === 2) return nums[0] === nums[1];
  //sort input array
  nums.sort();
  //loop over input array excluding last num
  for (let i = 0; i < nums.length - 1; i++) {
    //cmopare current num to next neighbor, if match return true
    if (nums[i] === nums[i + 1]) return true;
  }
  //return false if looping completes
  return false;
};
*/
