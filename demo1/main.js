function func(arr, select, value) {
    if (arguments.length != 3) {
        return false;
    }
    var newArr = [];
    arr.forEach(function(val) {
        if (val[select] == value) {
            newArr.push(val);
        }
    });
    return newArr;
}