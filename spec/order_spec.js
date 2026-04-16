import { handleInput, clearInput } from '../Order.js';

describe("Tests full pizza ordering chatbot", function () {

    beforeEach(function () {
        clearInput();
    });

    it("test welcome message", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Jasmine's Pizza!");
        expect(aResults[1]).toBe("What would you like? (pizza or pasta)");
    });

    it("test full pizza order with drink", function () {
        handleInput("hello");

        let aResults = handleInput("pizza");
        expect(aResults[0]).toContain("What size pizza?");

        aResults = handleInput("large");
        expect(aResults[0]).toBe("What topping would you like? (pepperoni or veggie)");

        aResults = handleInput("pepperoni");
        expect(aResults[0]).toBe("Would you like a drink? (yes or no)");

        aResults = handleInput("yes");
        expect(aResults[0]).toBe("Your order is confirmed!");
        expect(aResults[1]).toContain("large pizza with pepperoni and drink");
    });

    it("test full pasta order without drink", function () {
        handleInput("hello");

        let aResults = handleInput("pasta");
        expect(aResults[0]).toContain("What size pasta?");

        aResults = handleInput("medium");
        expect(aResults[0]).toBe("What sauce would you like? (alfredo or tomato)");

        aResults = handleInput("alfredo");
        expect(aResults[0]).toBe("Would you like a drink? (yes or no)");

        aResults = handleInput("no");
        expect(aResults[0]).toBe("Your order is confirmed!");
        expect(aResults[1]).toContain("medium pasta with alfredo and no drink");
    });

    it("test invalid item input", function () {
        handleInput("hello");
        const aResults = handleInput("burger");
        expect(aResults[0]).toBe("Please choose either pizza or pasta.");
    });

    it("test invalid size input", function () {
        handleInput("hello");
        handleInput("pizza");
        const aResults = handleInput("extra large");
        expect(aResults[0]).toBe("Please choose a size: small, medium, or large.");
    });

});