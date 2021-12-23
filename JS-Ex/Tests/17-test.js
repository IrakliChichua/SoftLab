const {expect} = require('chai')
const {palindrome} = require('../Scripts/17')

describe('Example 17 Test Suit', ()=>{
    it('abba', ()=>{
        const result = palindrome('abba');
        expect(result).to.equal(true);
    })
    it('AbBa', ()=>{
        const result = palindrome('AbBa');
        expect(result).to.equal(true);
    })
    it('Name no one man', ()=>{
        const result = palindrome('Name no one man');
        expect(result).to.equal(true);
    })
    it('Able was I ere I saw Elba', ()=>{
        const result = palindrome('Able was I ere I saw Elba');
        expect(result).to.equal(true);
    })
    it('No argument', ()=>{
        const result = palindrome();
        expect(result).to.equal(null);
    })
    it('Empty String 1', ()=>{
        const result = palindrome('');
        expect(result).to.equal(false);
    })
    it('Empty String 2', ()=>{
        const result = palindrome('  ,..');
        expect(result).to.equal(false);
    })
    it('Numbers', ()=>{
        const result = palindrome(11211);
        expect(result).to.equal(null);
    })
    it('Numbers as String', ()=>{
        const result = palindrome('11211');
        expect(result).to.equal(true);
    })
    it('Numbers,Characters and other symbols as String', ()=>{
        const result = palindrome('.11aSd2dSa11.');
        expect(result).to.equal(true);
    })

})

