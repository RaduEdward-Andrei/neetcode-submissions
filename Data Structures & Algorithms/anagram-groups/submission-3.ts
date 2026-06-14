class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
       const result = {}

       for (let str of strs) {
        const asciiArray = Array(26).fill(0)

        for (let char of str) {
            asciiArray[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }

        var key = asciiArray.join(',')
        if (!result[key]) {
            result[key] = []
        }

        result[key].push(str)
       }

       return Object.values(result)
    }
}
