class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        var profit = 0;
        var leftIndex = 0;

        for (let rightIndex = 1; rightIndex < prices.length; rightIndex++) {
            if (prices[rightIndex] < prices[leftIndex]) {
                leftIndex = rightIndex;
                continue;
            }

           if (prices[rightIndex] - prices[leftIndex] > profit) {
                profit = prices[rightIndex] - prices[leftIndex];
           }
        }

        return profit;
    }
}
