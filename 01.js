function songuyento(n){
    if (typeof n == "undifine") return false;
    if (n < 2){
        return false;
    }

    for (var i = 2; i < n/2; i++){
        if (n % i === 0){
            return false;
        }
    }

    return true;
}

console.log(songuyento(asd));