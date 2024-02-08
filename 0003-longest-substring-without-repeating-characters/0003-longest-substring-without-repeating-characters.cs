public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int n = s.Length;
        int res = 0;
        int start = 0;
        int end = 0;
        HashSet<Char> set = new HashSet<Char>();

        while (end < n)
        {
            if (!set.Contains(s[end]))
            {
                set.Add(s[end++]);
                res = Math.Max(res, end - start);
            }
            else
            {
                set.Remove(s[start++]);
            }
        }

        return res;
    }
}