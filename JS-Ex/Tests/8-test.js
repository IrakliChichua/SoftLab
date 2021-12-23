const {expect} = require('chai')
const {max} =  require('../Scripts/8')

describe('Example 8 Test Suit', ()=>{
    it('No Argument', ()=>{
        const result = max();
        expect(result).to.equal(null);
    })
    it('Input String', ()=>{
        const result = max('asf','hgr3');
        expect(result).to.equal(null);
    })
    it('Positive Number input', ()=>{
        const result = max(12,124);
        expect(result).to.equal(124);
    })
    it('Negative Number input', ()=>{
        const result = max(-12,-124);
        expect(result).to.equal(-12);
    })
    it('One Positive One Negative', ()=>{
        const result = max(12,-124);
        expect(result).to.equal(12);
    })
    it('Same Numbers', ()=>{
        const result = max(48,48);
        expect(result).to.equal(48);
    })
    it('Float Numbers', ()=>{
        const result = max(48.18,48.181);
        expect(result).to.equal(48.181);
    })
    it('max(max(),max())', ()=>{
        const result = max(max(),max());
        expect(result).to.equal(null);
    })
    it('max(max(x,y),max(x,y))', ()=>{
        const result = max(max(1,5),max(3,8));
        expect(result).to.equal(8);
    })

})