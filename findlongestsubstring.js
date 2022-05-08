/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let current =[0,1];
    
    for(let i=0;i<s.length;i++){
        const odd = checkpalindrome(s,i-1,i+1);
        const even = checkpalindrome(s,i-1,i);
        const longest = odd[1] - odd[0] > even[1]-even[0]? odd:even;
        current=current[1]-current[0] > longest[1]-longest[0]?current:longest;
    }
    
    return s.slice(current[0],current[1]);
    
    
};


function checkpalindrome(s,l,r){
    while(l >=0 && r<s.length){
        if(s[l] !== s[r]) break;
        l--;
        r++;
    }
    return [l+1,r];
}