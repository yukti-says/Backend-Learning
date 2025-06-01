// node initialization
// npm init or npm init -y
// all project ka lekha jokha package json me hota h
// how you use any module/package
// go to doc section in file package

// const fs = require('fs'); // file system module
// const fs = require('fs'); // file system module with promises
// now fs ki saari chije ab const fs me hai and we can now use it

// write file se file banana first writefile(fileName, data[,optional] , callback)

// fs.writeFile('hello.txt', "hey hello", function (err) {
//     if (err) {
//         console.log("Error in writing file", err);
//     } else {
//         console.log("File written successfully");
//     }
// })

// append file likhe hue me aage add karna
// fs.appendFile('hello.txt', "yukti ji0", (error) => {
//     if (error) console.log("error")
//     else console.log("okay madam done")
// })

// file rename
// fs.rename('hello.txt', 'hello2.txt', (error) => {
//     if (error) console.log("error in renaming file")
//     else console.log("file renamed successfully")
// })

// copy file
// fs.copyFile(name of fie , 'destination file' , callback)
// ./ mean current directory
// fs.copyFile('hello2.txt', './copy/copy.txt', (err) => {
//     if (err) console.error(err.message)
//     else console.log("ho gaya")
// })


// unlink file -> delete file takes path and callback

// fs.unlink('./hello2.txt', (err) => {
//     if (err) console.error(err.message)
//     else console.log("file deleted successfully")
// })

// rmdir -> remove directory blank directory only
// fs.rmdir('./copy', (err) => {
//     if (err) console.error(err.message)

// lets remove copy2
// fs.rm('./copy2', { recursive: true}, (err) => {
//     if (err) console.error(err.message)
//     else console.log("directory deleted successfully")
// })


// mkdir -> make directory
// fs.mkdir('./copy2', (err) => {
//     if(err) console.error(err.message)
//     else console.log("directory created successfully")
// })


// read file -> read file and return data
// fs.readFile('./copy/copy.txt','utf-8', (err, data) => {
//     if (err) console.error(err.message)
//     else console.log(data)
// //     console.log(data.toString())
// // console.log(data) // data is a buffer object

// })

// using utf-8 encoding to read file
// data is a string, not a Buffer. Node automatically decodes the bytes using UTF-8 and gives you readable text.


// HTTP module
// server create karne ke liye
// http ->a rule or protocol jise follow kare bina u can not send or get anything on internet so u need the help of http and https
const http = require('http');
// create server
const server = http.createServer(function (req, res) {
    // res.end("hello "); //response bheja h frontend pe
    res.end("how are you doing")

    
})

server.listen(3000); 