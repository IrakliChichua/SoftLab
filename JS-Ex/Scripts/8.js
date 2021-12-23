function max(x, y){
    if (typeof x != 'number' && typeof y != 'number') return null;
    return x>y ? x : y;
}

module.exports = {max};