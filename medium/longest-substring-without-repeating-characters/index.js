/**
 * @Description
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * @Examples
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * @Constraint:
 *
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 *
 * @Test-Cases
 *
 * "abcabcbb"
 * "bbbbb"
 * "pwwkew"
*/

var lengthOfLongestSubstring = function(s) {
	let seenHash = {};
	let longest_answer = "";

	for ( let j=0; j <= s.length; j++ ) {
		let answer = "";
		let seenItems = [];
		for ( let i=j; i < s.length; i++ ) {
			if ( seenItems.includes(s[i]) ) {
				break;
			}
			answer += s[i];
			seenItems.push(s[i]);
		}
		seenHash[answer] = answer.length;

		if ( answer.length > longest_answer.length ) {
			longest_answer = answer;
		}
	}
	return seenHash[longest_answer];
};

console.log(lengthOfLongestSubstring(""));
// lengthOfLongestSubstring("abcabcbb")
// lengthOfLongestSubstring("bbbbb")
// lengthOfLongestSubstring("pwwkew")