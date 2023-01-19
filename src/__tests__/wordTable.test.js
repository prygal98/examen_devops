const { deleteWordWithX } = require("../wordTable");


describe("First test to check if the function return an empty table", () => {
    test("should return an empty table", () => {
        const result = deleteWordWithX([]);
        expect(result).toEqual([]);
    });
});


describe("Second test to check if the function return the correct values ", () => {
    test("should return a table with the 3 elements", () => {
        const result = deleteWordWithX(['Momo', 'Hadji', 'Leo']);
        expect(result).toEqual(['Momo', 'Hadji', 'Leo']);
        expect(result).toHaveLength(3);
    });
});


