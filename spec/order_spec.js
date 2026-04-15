import { handleInput, clearInput } from '../Order.js';

describe("Tests all stages of an order", function () {
    beforeEach(function () {
        clearInput();
    });

    it("test hello", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Jasmine's Pizza!");
        expect(aResults[1]).toBe("Would you like to order a pizza?");
    });

    it("test yes", function () {
        handleInput("hello");
        const aResults = handleInput("yes");

        expect(aResults[0]).toBe("Your pizza order has been placed!");
        
        // time is dynamic, so just check part of the message
        expect(aResults[1]).toContain("It will be ready for pickup at 456 Slice Ave before");
    });

    it("test no", function () {
        handleInput("hello");
        const aResults = handleInput("no");

        expect(aResults[0]).toBe("No problem!");
        expect(aResults[1]).toBe("Come back anytime if you're hungry 🍕");
    });
});