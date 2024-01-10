const linearSearch = (arr, item) => {
    for (const i in arr)
    {
      if (arr[i] === item)
        return +i;
    }
    return -1;
  };
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(linearSearch(nums, 3))// 2
  console.log(linearSearch(nums, 9))// 8
  console.log(linearSearch(nums, 1))// 0
  console.log(linearSearch(nums, 0))// -1



// A linear search or sequential search is a method for finding an element within a list.
// It sequentially checks each element of the list until a match is found
// or the whole list has been searched.
// A linear search runs in at worst linear time and makes at most n comparisons,
// where n is the length of the list. If each element is equally likely to be searched,
// then linear search has an average case of (n+1)/2 comparisons,
// but the average case can be affected if the search probabilities for each element vary.
// Linear search is rarely practical because other search algorithms and schemes,
// such as the binary search algorithm and hash tables,
// allow significantly faster searching for all but short lists.