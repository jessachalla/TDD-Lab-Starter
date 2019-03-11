// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("does something (insertCoin)- inserts a coin and increases each cash tendered", function() {
        // Remember, you can arrange, act, and assert...start small
        //Arrange
        let changeHandler = new ChangeHandler(0,0);
        //Act and Assert
        expect(changeHandler.insertCoin('penny')).toBe(1);
        expect(changeHandler.insertCoin('nickel')).toBe(5);
        expect(changeHandler.insertCoin('dime')).toBe(10);
        expect(changeHandler.insertCoin('quarter')).toBe(25);
    });

    it("Returns true if enough coins have been inserted to at least meet the amountDue", function() {
        //This should be false because cash tendered is 0
        let changeHandler = new ChangeHandler(20,0);
        expect(changeHandler.isPaymentSufficient()).toBe(false);
        
        //This should be true because cash tendered is equal to cash due
        changeHandler = new ChangeHandler(20,20);
        expect(changeHandler.isPaymentSufficient()).toBe(true);

        //This should be true because cash tendered is more than cash due
        changeHandler = new ChangeHandler(20,100);
        expect(changeHandler.isPaymentSufficient()).toBe(true);
    });

    it("return the correct change", function() {
        //The amount due was 100, and you gave the machine 125, you get back 25
        let changeHandler = new ChangeHandler(100,125);
        expect(changeHandler.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 0 });

        //The amout due was 33, you gave the machine 100, you get back 67
        changeHandler = new ChangeHandler(33,100);
        expect(changeHandler.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 2 });

        //The amout due was 9, you gave the machine 10, you get back 1
        changeHandler = new ChangeHandler(9,10);
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 0, nickels: 0, pennies: 1 });

        //The amout due was 15, you gave the machine 15, you get back 0
        changeHandler = new ChangeHandler(15,15);
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 0, nickels: 0, pennies: 0 });

        //The amout due was 80, you gave the machine 70, you get back 0 because you havent paid enough
        changeHandler = new ChangeHandler(80,70);
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 0, nickels: 0, pennies: 0 });
    });

});