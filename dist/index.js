"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pluralize = require("pluralize");
/**
 * @Method: Returns the plural form of any noun.
 * @Param: {string}
 * @Return: {string}
 */
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
