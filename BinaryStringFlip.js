// SOLUTION 926. Flip String to Monotone Increasing

//Time complexity :O(n);


var minFlipsMonoIncr = function(s) {
    let count1=0;
    let flipCount=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='1'){
            count1++;
        }else{
            if(count1>=1){
                flipCount++;
            }
        }
        flipCount=Math.min(flipCount,count1);
    }
    return flipCount;
    
};