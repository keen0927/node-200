import { promises } from "fs";

// const condition = false;
// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve('성공')
//     } else {
//         reject('실패');
//     }
// });

// console.log(promise);

// promise
//     .then((message) => {
//         return new Promise((resolve, reject) => {
//             resolve(message)
//         });
//     })
//     .then((message2) => {
//         console.log(message2);
//         return new Promise((resolve, reject) => {
//             resolve(message2)
//         });
//     })    
//     .then((message3) => {
//         console.log(message3);
//         return new Promise((resolve, reject) => {
//             resolve(message3)
//         });
//     })        
//     .catch((err) => {
//         console.error(err)
//     });


function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm'});
        })
        .catch(err => {
            console.error(err)
        })
}

async function findAndSaveUser(Users) {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({})
}
