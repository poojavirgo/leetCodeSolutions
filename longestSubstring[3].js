//3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    
    let set = new Set();
    let current =0;
    let start =0;
    let end = s.length;
    let maxlength=0;
    
    while(current < end){
        if(!set.has(s[current])){
            set.add(s[current]);
            current++;
            maxlength= Math.max( maxlength,set.size);     
        }else{
            set.delete(s[start]);
            start++;
        }
    }
    
    return maxlength;
    
    
    
};