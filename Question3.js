// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false

var customWordBreak = function(s, word) {
    if (word == null || word.length === 0) {
        return false;
    }
    
    const wordSet = new Set(word);
    const a = new Set();
    const queue = [0];
    
    while (queue.length) {
        const start = queue.shift();
        
        if (!a.has(start)) {
            for (let end = start + 1;end <= s.length;end++) {
                const currentWord = s.slice(start,end);
                
                if (wordSet.has(currentWord)) {
                    if (end === s.length) {
                        return true;
                    }
                    queue.push(end);
                }
            }
            a.add(start);
        }
    }
    
    return false;
};









