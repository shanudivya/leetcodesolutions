let nums=['@',2,'@',4,5]

var moveCharacters = function(nums) {
    let index=0;
	for(let i=0; i<nums.length;i++){
	if(nums[i]=='@'){
	    nums[i]='a';
	}
	console.log(nums[i])
}
 for(let i=0; i<nums.length;i++){
     if(nums[i]!=='a'){
         nums[index]=nums[i]
        index++
    }
 }
 for(let i=index;i<nums.length;i++){
     nums[i]='a'
 }
console.log(nums)
 
}
moveCharacters(nums);