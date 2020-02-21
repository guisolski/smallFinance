module.exports = function parserStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(arrayAsString => arrayAsString.trim());
}