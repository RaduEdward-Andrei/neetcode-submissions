class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let result = []
        const map = new Map<number, number>()

        for (const nr of nums) {
            map.set(nr, ((map.get(nr) ?? 0) + 1))
        }

        const buckets: number[][] = Array.from(
            { length: nums.length + 1 },
            () => []
        )

        for (const [number, frequency] of map) {
            buckets[frequency].push(number)
        }

        for (let index = buckets.length -1; index >= 0; index--) {
            for (const number of buckets[index]) {
                result.push(number);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result
    }
}
