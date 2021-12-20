function string(value){
    if (typeof value === 'string'){
        if (value.includes('?')) return true;
        else return false; 
    }
    else throw 'Invalid Input type';
}
try {
    console.log(string());
  } catch (e) {
    console.error(e);
  }
