var nums = [2,3,4,5,',', 5,6,','];
var allnums = [];


for (var i = 0; i < nums.length; i++){
  if (nums[i] != ','){
    allnums.push(nums[i]);
  }
}

console.log(allnums);

