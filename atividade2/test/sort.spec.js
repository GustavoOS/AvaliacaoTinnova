const bubbleSort = require("../src");

/*
    GIVEN [5, 3, 2, 4, 7, 1, 0, 6] as an array
    WHEN calling bubble sort method
    THEN every array element should equal its index
*/
test('Test Bubble Sort', () => {
    const arr = [5, 3, 2, 4, 7, 1, 0, 6];
    bubbleSort(arr);
    assertElementEqualIndex(arr); //arr[0] = 0 and so on
});

/*
    GIVEN [0, 1, 2, 3, 4, 5, 6, 7] as an array
    WHEN calling bubble sort method
    THEN every array element should equal its index
*/
test('Test already sorted', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];
    bubbleSort(arr);
    assertElementEqualIndex(arr);
});

/*
    GIVEN [7, 6, 5, 4, 3, 2, 1, 0] as an array
    WHEN calling bubble sort method
    THEN every array element should equal its index
*/
test('Test reverse sorting', () =>{
    const arr = [7, 6, 5, 4, 3, 2, 1, 0];
    bubbleSort(arr);
    assertElementEqualIndex(arr);
})

function assertElementEqualIndex(arr) {
    for (const [index, value] of arr.entries())
        expect(value).toBe(index);
}