const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// }


// function name(item){
//     console.log(item);
// }

// coding.forEach(name);


// coding.forEach((item) => {
//     console.log(item);
// })

// const printMe = (item) => {
//     console.log(item);
// }

// coding.forEach(printMe);

//Usuallu forEach function gives three arguments(item, index, arr);
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {language : "java",
        fileName : ".java"
    },
    {language : "javascript",
        fileName : ".js"
    },
    {language : "python",
        fileName : ".py"
    }
]

myCoding.forEach( (item) => {
    console.log("[" + item.language + "," + item.fileName+ "]")
})