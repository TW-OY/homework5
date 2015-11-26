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


function arr_find_no_repeat_elements(arr){
    var hash = {};
    arr_no_reapeat_elements = [];
    arr.forEach(function(item){
        hash[item] = 0;
    });
    arr.forEach(function(item){
        hash[item] += 1;
    });
    arr.forEach(function(item){
        if(hash[item] === 1)
            arr_no_reapeat_elements.push(item);
    });
    return arr_no_reapeat_elements;

}


function single_element(arr){
    var arr_odd_NO_elements = arr_find_odd_NO_elements(arr);
    var result = arr_find_no_repeat_elements(arr_odd_NO_elements);
    return result;
}

