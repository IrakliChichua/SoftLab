function palindrome(value){
    if (typeof value!== "string") return null;

    // modify string
    const str = value
        .replace(/[^0-9a-z-A-Z ]/g, '')
        .replace(/\s/g, '')
        .toUpperCase();
    // if modified string is empty
    if (str.length === 0) return false;

    // check if it is palindrome
    for(let i=0, j=str.length-1; i<j; i++, j--){
        if (str[i] !== str[j]) return false;
    }
    return true;
}

module.exports = {palindrome};

