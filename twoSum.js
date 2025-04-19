/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const myMap = new Map();
    for(let i=0;i<nums.length;i++){
        let diff=target-nums[i];
         if (myMap.has(diff)) {
            return [myMap.get(diff), i];
        }
        myMap.set(nums[i], i);
    }
};

/**
map->data st-> saves data in key value pair
.set()->set key value
.get()->find and return value linked with key
.has()->check if key exist
nums = [2,7,11,15], target = 9

map=[]
i=0
diff=9-2=7
nums[i]=2
[2<->0]
m
map=[2 0]
i=1
diff=9-7=2
return[0 , 1]
 */