function single_element(arr) {
    var result_final = [];
    var result_temp = [];
    arr.filter(function(item,index){
        if(index % 2 == 0)
            {
                result.push(item);
            }
    }
    var n = {};
    result_temp.forEach(function(item){
        if (!n[typeof(item) + item]) {
            n[typeof(item) + item] = true;
            result_final.push(item);
        })
    return result_final;
    }
}
