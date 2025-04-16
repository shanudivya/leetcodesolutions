//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //01035
 /**
 index=0
 i=0
 nums[0]=0
 index=0
 i=1
 nums[1]=1
 
 index=1
 i=2
 nums[2]=0
 index=1
 i=3
  nums[3]=3
  index=2
  i=4
  nums[4]=5
index=3
o/p:
[13500]
  */
var moveZeroes = function(nums) {
    let index=0;
    for(let i=0;i<nums.length;i++){
        // console.log(nums[i]);
        if(nums[i]!=0){
            nums[index]=nums[i];
            index++;
        }
    }
    for(let i=index;i<nums.length;i++){
        nums[i]=0;
    }

    console.log(nums);
};