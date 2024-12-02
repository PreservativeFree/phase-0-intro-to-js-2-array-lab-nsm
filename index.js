
const cats = ["Milo","Otis","Garfield",]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

const newCats = [...cats]

function appendCat(name) {
    newCats.push(name)
    return newCats
}
const prependCats = [...newCats]

function prependCat(name) {
    prependCats.unshift(name)
    return prependCats
}

const removeCats = [...prependCats]

function removeLastCat() {
    removeCats.pop()
    return removeCats
}

const removeFirstCats = [...removeCats]

function removeFirstCat() {
    removeFirstCats.shift()
    return removeFirstCats
}