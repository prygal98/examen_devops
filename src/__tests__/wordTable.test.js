const { deleteWordWithX } = require("../wordTable");

describe("First test to check if the function return an empty table CHANGES", () => {
    test("should return an empty table", () => {
        const result = deleteWordWithX([]);
        expect(result).toEqual([]);
    });
});

describe("Second test to check if the function return the correct values ", () => {
    test("should return a table with the 3 elements", () => {
        const result = deleteWordWithX(["Momo", "Hadji", "Leo"]);
        expect(result).toEqual(["Momo", "Hadji", "Leo"]);
        expect(result).toHaveLength(3);
    });
});

describe("Third test to check if the function return the correct values ", () => {
    test("should return a table with the 2 elements", () => {
        const result = deleteWordWithX(["DMX", "Xzibit", "JeanKevin"]);
        expect(result).toEqual(["JeanKevin"]);
        expect(result).toHaveLength(1);
    });
});

describe("Fourth test to check if the function return the correct values", () => {
    test("should return a table with the 1 element", () => {
        const result = deleteWordWithX(["JC", "Leo", "xena"]);
        expect(result).toEqual(["JC", "Leo"]);
        expect(result).toHaveLength(2);
    });
});
