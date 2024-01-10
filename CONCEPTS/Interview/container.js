// Container with most water

var maxArea = function (height) {
    let max = -Infinity;

    let left = 0;
    let right = height.length-1;

    while(left < right){
        let currHeight = Math.min(
            height[left], height[right]);

            let width = right - left;
            let area = currHeight*width;
            max = Math.max(max, area);

            if(height[left] < height[right]){
                left++;
            } else {
                right--;
            }
    }
    return max;
}; // O/P: 49

//Test case 1

let height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height1));
// expected output: 49

//Test case 2

