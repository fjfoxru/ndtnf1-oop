System.register("models/Book", ["nanoid"], function (exports_1, context_1) {
    "use strict";
    var nanoid_1;
    var __moduleName = context_1 && context_1.id;
    function buildBook(title, description, authors, favorite, fileCover, fileName) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (authors === void 0) { authors = ""; }
        if (favorite === void 0) { favorite = ""; }
        if (fileCover === void 0) { fileCover = ""; }
        if (fileName === void 0) { fileName = ""; }
        return {
            id: nanoid_1.nanoid(),
            title: title,
            description: description,
            authors: authors,
            favorite: favorite,
            fileCover: fileCover,
            fileName: fileName,
        };
    }
    exports_1("buildBook", buildBook);
    return {
        setters: [
            function (nanoid_1_1) {
                nanoid_1 = nanoid_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("app", ["models/Book"], function (exports_2, context_2) {
    "use strict";
    var Book_1, book1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Book_1_1) {
                Book_1 = Book_1_1;
            }
        ],
        execute: function () {
            book1 = Book_1.buildBook();
            console.log(book1);
        }
    };
});
