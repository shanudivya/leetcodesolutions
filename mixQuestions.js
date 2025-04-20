/*
Given an array with int values and character a and a target, your task is:
1. replace a with 0
2. move 0 to end of array
3. console.log indexes if sum matches the target.
4. reverse array
Sample input: ['a',2,7,'a',9,11]
*/
let nums = ['a',2,7,'a',9,11];
let target = 9;

let mixQuestions = function(nums, target) {
for(let i=0;i<nums.length;i++){
    if(nums[i]=='a'){
        nums[i]=0
    }
    //console.log(nums[i])
}
console.log(nums)
//[0 2 7 0 9 11]
let variable=0
for(let i=0; i<nums.length;i++){
    if(nums[i]!==0){
    nums[variable]=nums[i];
    variable++;
    }
}
for(let i=variable;i<nums.length;i++){
    nums[i]=0
}
console.log(nums)

let map= new Map();
for(let i=0;i<nums.length;i++){
    let diff = target-nums[i];
    if(map.has(diff)){
        console.log(map.get(diff),i)
        break;
        
    }
    map.set(nums[i],i);
}
console.log(nums.reverse())
}


mixQuestions(nums, target);