function daonguoc(st) {
    var st1 = "";
    for (var i = st.length - 1; i >= 0; i--){
        st1 += st[i];
    }
    return st1;
}

console.log(daonguoc((56789).toString()));