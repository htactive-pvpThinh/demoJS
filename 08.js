function print(stResult, k){
    let st1 = "";
    for (var m = 0; m <= k; m++){
        if (stResult[m] != " "){
            st1 += stResult[m];
        }     
    }
    console.log(st1);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function allString(st, check, i, stResult, k){
    for (let j = i; j < st.length; j++){
        if (check[j] == 0){
            //stResult[i] = st[j]; 
            stResult = setCharAt(stResult, i, st[j]);
            check[j] = 1;
            if (i == k){
                print(stResult,k);
            }
            else allString(st, check, j + 1, stResult, k);
            check[j] = 0;
        }
    }
}

var st = "quang";
var stResult = "";
var check = [];
for (var i = 0; i < st.length; i++){
    check.push(0);
    stResult += " ";
}
for (var i = 0; i < st.length; i++) allString("quang", check, 0, stResult, i);
