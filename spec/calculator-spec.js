import { userDate } from './../src/calculator.js';

describe ('userDate', function() {

  const testDate = new userDate(3, 13, 1300);

  it('should have three values', function(){
    expect(testDate.checkArgs()).toEqual("true")
  });

  it('should not be a zero value', function() {
    expect(testDate.checkMin()).toEqual("input non-zero")
  });

  it ('should not exceed 31', function() {
    expect(testDate.checkMaxDays()).not.toEqual('date exceeds 31')
  });

  it ('should not exceed 12', function() {
    expect(testDate.checkMaxMonths()).not.toEqual('month exceeds 12')
  });

  // it ('should output a day', function() {
  //   testDate.getDay();
  //   testDate.testDay();
  //   // expect(testDate.getDay()).toEqual('day of the week')
  // })


});
