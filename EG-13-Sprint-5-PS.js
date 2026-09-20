
/**
 * 01. Remove Duplicates from Sorted Array
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


/**
 * 02. Binary Search
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};


/**
 * 03. Search Insert Position *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};


/**
 * 04. Maximum Depth of Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};


/**
 * 05. Invert Binary Tree
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


/**
 * 06. Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};


/**
 * 07. Rotate Array *
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {
    const n = nums.length;

    if (n === 0) {
        return;
    }

    k = k % n;

    nums.reverse();

    let left = 0;
    let right = k - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    left = k;
    right = n - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};


/**
 * 08. Min Stack
 * @return {void}
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};


/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val);
    }
};


/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};


/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};


/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};


/**
 * 09. Continuous Subarray Sum
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const remainderIndex = new Map();

    remainderIndex.set(0, -1);

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        const remainder = k === 0 ? sum : sum % k;

        if (remainderIndex.has(remainder)) {
            if (i - remainderIndex.get(remainder) >= 2) {
                return true;
            }
        } else {
            remainderIndex.set(remainder, i);
        }
    }

    return false;
};


/**
 * 10. Daily Temperatures
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const previousIndex = stack.pop();
            result[previousIndex] = i - previousIndex;
        }

        stack.push(i);
    }

    return result;
};