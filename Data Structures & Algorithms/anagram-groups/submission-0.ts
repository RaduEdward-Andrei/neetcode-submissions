class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let result = {}

        for (const str of strs) {
            const sortedStr = str.split('').sort().join('')

            if (!result[sortedStr]) {
                result[sortedStr] = []
            }
            result[sortedStr].push(str)
        }

        return Object.values(result)
    }
}
