//Array Intersection Calculation using Filter Function
function intersectionWithFilter(arr1, arr2) {
    console.log("***Array Intersection Using Filter Function***");
    const result = [...new Set(arr1.filter(chkIncludes))].sort((a, b) => a - b);
    function chkIncludes(value) {
        return arr2.includes(value);
    }
    console.log(result);
}
//Array Intersection Calculation using Loop
function intersectionWithLoop(arr1, arr2) {
    console.log("***Array Intersection Using Loop***");
    let result = [];
    let flag = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                for (let k = 0; k < result.length; k++) {
                    if (arr1[i] === result[k]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag === 0) {
                    result.push(arr1[i]);
                }
            }
        }
        flag = 0;

    }
    result = result.sort((a, b) => a - b);
    console.log(result);
}
intersectionWithFilter([4, 2, 3, 2, 4], [3, 4, 2, 5, 6, 4, 3]);
intersectionWithLoop([4, 2, 3, 2, 4], [3, 4, 2, 5, 6, 4, 3]);
intersectionWithFilter([2, 3, 4, 5], [6, 7, 8, 9]);
intersectionWithLoop([2, 3, 4, 5], [6, 7, 8, 9]);
intersectionWithFilter([5, 3, 4, 1, 2], [4, 5, 2, 3, 1]);
intersectionWithLoop([5, 3, 4, 1, 2], [4, 5, 2, 3, 1]);

