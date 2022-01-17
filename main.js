let text = "javascript is a programming language"

//.search
let search = text.search("is");

// .replace
let replace = text.replace("is" , "are")

// .match
let match = text.match("is")


// i -modifier
let i = text.match(/Is/i)

// g - modifier
let g = text.match(/a/g)

// brackets
// let abc = text.match(/[ai]/g)
let abc = text.match(/[AI]/ig);

//metacharacters
// let newText = "javascript is 100% free to use";

// let meta = newText.match(/\W/g)


// Quantifiers
let newText = "javaaascript is very good laanguage"
let quant = newText.match(/a{3}/g)

console.log(quant)

