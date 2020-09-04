// var twoSum = function(nums, target) {
//   for(let i = 0; i<nums.length; i++){
//     for(let j = 0; j<nums.length; j++)
//     if(i!=j && (nums[i]+nums[j]) === target){
//       return [i, j];
//     }
//   }
// };


let twoSum = function(nums, target){
  let indexOf = {};
  
  for(let i=0; i<nums.length; i++){
    complement = target - nums[i];
    if(complement in indexOf){
      return [indexOf[complement],i];
    }
    indexOf[nums[i]] = i;
  }
  
}


console.log(twoSum([1,2,3,4], 3));