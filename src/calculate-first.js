function single_element(arr){
    var result_final = [];
    var result_temp = [];
    var hash = {};
    arr.filter(function(item,index){
        if(index % 2 !== 0)
            {
                result_temp.push(item);
            }
    });
    result_temp.forEach(function(item){
            hash[item] = 0;
    });
    result_temp.forEach(function(item){
        hash[item] += 1;
    });
    result_temp.forEach(function(item){
        if(hash[item] === 1)
            {
                result_final.push(item);
            }

    });
    return result_final;
}

