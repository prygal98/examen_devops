const { deleteWordWithX } = require("../wordTable");


describe("First test to check if the function return an empty table", () => {
    test("should return an empty table", () => {
        const result = deleteWordWithX([]);
        expect(result).toEqual([]);
    });
});

