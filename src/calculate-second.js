function sum(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        result += arr[i];
    return result;
}


function is_odd(number){
    if(number % 2 === 0)
        return true;
    else
        return false;
}


function arr_find_odd_NO_elements(arr){
    var arr_odd_NO_elements = [];
    arr.filter(function(item,index){
        if(!is_odd(index))
            arr_odd_NO_elements.push(item);
    });
    return arr_odd_NO_elements;
}

function arr_find_median(arr){
    var median;
    if(!is_odd(arr.length)) {
        var median_index = Math.floor(arr.length / 2);
        median = arr[median_index];
    }
    else{
         median = sum(arr) / arr.length;
    }
    return median;
}

function calculate_median(arr) {
    var median;
    var arr_odd_NO_elements = arr_find_odd_NO_elements(arr);
    var sorted_arr_odd_NO_elements = arr_odd_NO_elements.sort();
    median = arr_find_median(sorted_arr_odd_NO_elements);
    return median;
}

