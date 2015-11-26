function sum(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        result += arr[i];
    return result;
}

function arr_average(arr){
    return sum(arr) / arr.length;
}

function even_group_calculate_average(arr) {
    var arr_No_odd = [];
    var odds_in_arr_No_odd =[];     //odds in arr_No_odd
    var odds_in_arr_No_odd_bits = [];
    var odds_in_arr_No_odd_ten = [];
    var odds_in_arr_No_odd_hundred = [];
    var result = [];
    arr.filter(function(item,index){
        if(index % 2 !== 0) {
            arr_No_odd.push(item);
        }
    });
    arr_No_odd.forEach(function(item){
        if(item % 2 === 0){
            odds_in_arr_No_odd.push(item);
        }
    });
    if(odds_in_arr_No_odd.length === 0){
        result.push(0);
        return result;
    }
    else{
        odds_in_arr_No_odd.forEach(function(item){
            if(item < 10)
                odds_in_arr_No_odd_bits.push(item);
            else if(item < 100)
                odds_in_arr_No_odd_ten.push(item);
            else
                odds_in_arr_No_odd_hundred.push(item);
        });
    }
    if(odds_in_arr_No_odd_bits.length ===0 && odds_in_arr_No_odd_ten.length === 0)
        result.push(arr_average(odds_in_arr_No_odd_hundred));
    else{
        result.push(arr_average(odds_in_arr_No_odd_bits));
        result.push(arr_average(odds_in_arr_No_odd_ten));
        result.push(arr_average(odds_in_arr_No_odd_hundred));
    }
    return result;


}
