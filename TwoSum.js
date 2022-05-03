// Two Sum

// Time Complexity: O(n);
// Space Compexity :O(n)

var twoSum = function(nums, target) {
    const map = new Map();
       let j;
       
       for(let i=0;i<nums.length;i++){
           j=target - nums[i];
           if(map.has(j)){
               return [map.get(j),i];
               
           }else{
               map.set(nums[i],i);
               
           }
       }
   };