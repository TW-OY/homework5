function sum(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        result += arr[i];
    return result;
}


function calculate_median(arr) {
    var temp_arr = [];
    var median;
    arr.filter(function(item,index){
        if(index % 2 !== 0) {
            temp_arr.push(item);
        }
    });


    var sorted_temp_arr = temp_arr.sort();
    if(sorted_temp_arr.length % 2 !== 0) {
        var median_index = Math.floor(sorted_temp_arr.length / 2);
        median = sorted_temp_arr[median_index];
    }
    else{
         median = sum(sorted_temp_arr) / sorted_temp_arr.length;
    }
    return median;
}

