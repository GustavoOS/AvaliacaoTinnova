const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

const bubbleSort = (arr) => {
    for (let lastIndex = arr.length - 1; lastIndex >= 0; lastIndex--)
        for (let index = 0; index < lastIndex; index++)
            if (arr[index] > arr[index + 1])
                swap(arr, index, index + 1);
};

module.exports = bubbleSort;