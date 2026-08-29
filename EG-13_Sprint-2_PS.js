//1. Reverse a String
/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}
//console.log(reverseString("hello"));
// Output: "olleh"




//2. Find Maximum
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

//console.log(findMax([3, 7, 2, 9, 5]));
// Output: 9




//3. Check for Palindrome
/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

//console.log(isPalindrome("racecar"));
// Output: true



//4. Sum Array Elements
/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    return sum;
}

//console.log(sumArray([10, 20, 30, 40]));
// Output: 100


//5. Count Vowels
/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//console.log(countVowels("javascript"));
// Output: 3



//6. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

//console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]



//7. Flatten a Nested Array

/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    let result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

//console.log(flattenArray([1, [2, [3, 4], 5]]));
// Output: [1, 2, 3, 4, 5]




//8. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        const key = str.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

//console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected Output: [["eat","tea","ate"],["tan","nat"],["bat"]]



//9. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const seen = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);

        maxLength = Math.max(maxLength,right - left + 1);
    }

    return maxLength;
}

//console.log(lengthOfLongestSubstring("abcabcbb"));
// Output: 3



//10. Deep Clone an Object

/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const copyArr = [];
        for (let i = 0; i < obj.length; i++) {
            copyArr[i] = deepClone(obj[i]);
        }
        return copyArr;
    }

    const copyObj = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copyObj[key] = deepClone(obj[key]);
        }
    }
    return copyObj;
}

// console.log(deepClone({ a: 1, b: { c: 2 } }));
// Expected Output: { a: 1, b: { c: 2 } }