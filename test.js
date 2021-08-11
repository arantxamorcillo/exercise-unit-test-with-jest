const { sum } = require ('./app.js');
test ('adds 14 + 9 to equeal 23', () =>{
    let total = sum(14,9);
    expect(total).toBe(23)
})

test("One euro should be 1.206 dollars", function(){
  
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(dollars).toBe(expected); 
})

test("One Dollar should be 105 Yens", function(){

const { fromDollarToYen } = require('./app.js')
    const Yens = fromDollarToYen (1)
    const expected = 1 * (127.9/1.20); 
    expect(Yens).toBe(expected); 
})

test("One yen should be 1.206 pound", function(){

    const { fromYenToPound } = require('./app.js')
        const pounds = fromYenToPound (3.5)
        const expected = 3.5 * (0.8/127.9); 
        expect(pounds).toBe(expected); 
    })