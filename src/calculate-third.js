function sum(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        result += arr[i];
    return result;
}


function arr_average(arr){
    return sum(arr) / arr.length;
}


function is_odd(number){
    if(number % 2 === 0)
        return true;
    else
        return false;
}


function arr_find_odd_index_elements(arr){
    var arr_odd_index_elements = [];
    arr.filter(function(item,index){
        if(!is_odd(index))
            arr_odd_index_elements.push(item);
    });
    return arr_odd_index_elements;
}


function arr_find_odds_elements(arr){
    var arr_odds_elements = [];
    arr.forEach(function(item){
        if(is_odd(item)){
            arr_odds_elements.push(item);
        }
    });
    return arr_odds_elements;
}


function arr_is_empty(arr){
    if(arr.length)
        return false;
    else
        return true;
}


function arr_include_1bit_number(arr){
    var arr_1bit_number = [];
    arr.forEach(function(item){
        if(item < 10)
            arr_1bit_number.push(item);
    });
    return arr_1bit_number;
}

function arr_include_2bit_number(arr){
    var arr_2bit_number = [];
    arr.forEach(function(item){
        if(item < 100 && item > 10)
            arr_2bit_number.push(item);
    });
    return arr_2bit_number;
}


function arr_include_3bit_number(arr){
    var arr_3bit_number = [];
    arr.forEach(function(item){
        if(item > 100)
            arr_3bit_number.push(item);
    });
    return arr_3bit_number;
}


function even_group_calculate_average(arr) {
    var arr_have_odd_index = arr_find_odd_index_elements(arr);
    var odds_in_arr_have_odd_index = arr_find_odds_elements(arr_have_odd_index);
    if(arr_is_empty(odds_in_arr_have_odd_index))
        return [0];
    else{
        var odds_in_arr_No_odd_bits = arr_include_1bit_number(odds_in_arr_have_odd_index);
        var odds_in_arr_No_odd_ten = arr_include_2bit_number(odds_in_arr_have_odd_index);
        var odds_in_arr_No_odd_hundred = arr_include_3bit_number(odds_in_arr_have_odd_index);
        var result = [];
    }
    if(odds_in_arr_No_odd_bits.length ===0 && odds_in_arr_No_odd_ten.length === 0)  //just 3bits number
        result.push(arr_average(odds_in_arr_No_odd_hundred));
    else{
        result.push(arr_average(odds_in_arr_No_odd_bits));
        result.push(arr_average(odds_in_arr_No_odd_ten));
        result.push(arr_average(odds_in_arr_No_odd_hundred));
    }
    return result;
}
