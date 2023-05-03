/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root===null){
            return false;
        }
    else if (root.left===null && root.right===null){
        if (root.val===targetSum){
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return (hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val))
    }
}