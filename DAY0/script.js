// arrays
ar = [1, 2, "a", function () { }, [1, 2, 3, 4], { name: "yukti", age: 23 }];

// ar.forEach((value) => {
//     console.log("Hello  " + value)
// })


// const newAr = ar.map((value) => {
//     return ("Hello " + value) //returns an array
// })

// console.log(newAr)


var aa = ar.filter((val) => {
    return (val >0)
})
console.log(aa)