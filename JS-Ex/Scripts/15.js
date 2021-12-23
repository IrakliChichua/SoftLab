function string(value){
    if (typeof value === 'string'){
        return value.includes('?');
    }
    else throw 'Invalid Input type';
}
try {
    console.log(string());
  } catch (e) {
    console.error(e);
  }
