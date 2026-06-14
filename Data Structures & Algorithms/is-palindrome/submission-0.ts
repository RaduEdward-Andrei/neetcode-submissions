class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        const lowercased = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        return lowercased === lowercased.split('').reverse().join('');
    }
}
