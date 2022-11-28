//READ THE PROMPT OUT LOUD
//RE-READ THE PROMPT TO SELF
//GIVE HIGH LEVEL UNDERSTANDING
//CONFIRM UNDERSTANDING
//IDENTIFY INPUTS, OUTPUTS, CONSTRAINTS, AND EDGE CASES
//ASK CLARIFYING QUESTIONS
//GIVE HIGH LEVEL APPROACH
//CONFIRM OPINION ON APPROACH
//START CODING

//approach 1: use hash map to count characters in one string and compare to other
//time:O(s + t) space:O(s)

//approach 2: sort both strings and compare
//time:O(slog(s) + tlog(t)) space: O(1) - ignore sorting space if used

/**
 * @param { string } s - string of lower case english characters
 * @param { string } t - string of lower case english characters
 * @return { boolean } if t an anagram of s?
 */
var isAnagram = function (s, t) {
  //must be same length to be potential anagram
  if (s.length !== t.length) return false;
  if (s.length === 1) return s === t;
  //create obj to store char counts for s
  const counts = {};
  //loop over s and build counts
  for (const char of s) {
    if (!(char in counts)) counts[char] = 0;
    counts[char]++;
  }
  //loop over t and subtract from counts
  for (const char of t) {
    //if count for cur char is zero must not be anagram
    if (!(char in counts) || counts[char] === 0) return false;
    counts[char]--;
  }
  //return true
  return true;
};

// var isAnagram = function(s, t) {
//   //check same length and return false if not
//   if (s.length !== t.length) return false;
//   //return true if singleton
//   if (s.length === 1) return s === t;
//   //sort both input strings
//   s = s.split('').sort().join('');
//   t = t.split('').sort().join('');
//   //return comparison
//   return s === t;
// };
