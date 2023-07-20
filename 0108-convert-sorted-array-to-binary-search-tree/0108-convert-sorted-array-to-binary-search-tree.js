/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length===0){
        return null;
    }
    else{
        return buildTree(nums, 0, nums.length-1)
    }
    
};

const buildTree=(arr, startIndex, endIndex)=>{
        if (startIndex>endIndex){
            return null;
        }
        let middle=(Math.floor((startIndex+endIndex)/2));
        let root=new TreeNode(arr[middle]);
        root.left=buildTree(arr, startIndex, middle-1);
        root.right=buildTree(arr, middle+1, endIndex);
        return root;
    }