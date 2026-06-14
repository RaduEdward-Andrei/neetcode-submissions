class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let openBrackets = [];
        let closingBrackets = { ")": "(", "]": "[", "}": "{" };

        for (const char of s) {
            if (closingBrackets[char]) {
                if (openBrackets.at(-1) === closingBrackets[char]) {
                    openBrackets.pop();
                } else {
                    return false;
                }
            } else {
                openBrackets.push(char);
            }
        }

        return openBrackets.length === 0;
    }
}
