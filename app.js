const rob = (nums)=>{
    // check if array is undefind or null or a 0 length 
    if(!nums || nums.length === 0){
        return 0
    }

    // check if theres is only one index in the array and return it
    else if (nums.length === 1) {
        return nums[0]

    }

    const nums = [1,2,3,1]
    // array to check the value
    let total = []

    // setting the array total equal  to the nums 
    total[0]= nums[0]
    // will check if the first or second index has the greater value 
    total[1]= Math.max(nums[0], nums[1])

    // will loop through the third index and compare the total 
    for(let i = 2; i < nums.length; i++){
        // will check the value of the current index or the value of the previous total index and the current nums index
        total[i] = Math.max(total[i-1], (total[i-2] + nums[i]))
    }

    // will return the last element in the array
    return total[total.length - 1]
}