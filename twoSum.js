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
.get()->find value by key
.has()->check if key exist
[2,7,11,15]
9
diff->9-2
[2<->0]
diff->9-7
map has 2?->yes
 */