function reverse(x){
    let rev = 0;
    while(x){
        rev = rev*10 + x%10;
        x = Math.floor(x/10);
    }    
    return rev;
}

