function deleteWordWithX(array) {
    let table = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().indexOf("x") === -1) {
            table.push(array[i]);
        }
    }
    return table;
}

exports.deleteWordWithX = deleteWordWithX;
