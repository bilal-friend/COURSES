function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var number = nums_1[_a];
        result += number;
    }
    return result;
}
addAll(2, 6, 8, 9, 7, +true);
