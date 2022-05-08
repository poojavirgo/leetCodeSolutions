//9. Palindrome Number


//The below solution will work for both "numbers" and strings

//Time Complexity : O(n)
//Space Complexity: O(1)

//using two pointer method:

var isPalindrome = function(x) {
    
    let string = String(x);
    //string = [1,2,1];
    let left =0;
    let right = string.length-1;
    while(left<right){
        if(string[left]!== string[right]){
            return false;
        }
        right--;
        left++;
    }
}