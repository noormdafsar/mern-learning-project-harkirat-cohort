const express = require('express');
const app = express();
const zod = require('zod');

const schema = zod.array(zod.string().min(3).max(20));
// const schema = zod.array(zod.number().min(1).max(1000));

app.use(express.json());

// these middlewares commented because now zod is handling the validation

// function loginAuthentication(req, res, next) {
//     const { username, password, email } = req.body;
//     if( !username || !password || !email) {
//         return res.status(400).json({
//             message: 'username or password is missing',
//             status: 'error',
//         })
//     }
//     next();
//     // Here you can add your authentication logic, e.g., checking against a database

// }

// function kindneyCheck(req, res, next) {
//     const kidneyId = req.query.kidneyId;
//     if (!kidneyId) {
//         return res.status(400).json({
//             message: 'kidneyId is missing',
//             status: 'error',
//         });
//     }
//     next();
// }

// zod validation uses:

/* Example 1:*/

// function inputValidatin(arr){
//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(arr);
//     if(!response.success) {
//         console.log('Input validation failed:', response.error);
//         return;
//     }
//     else{
//         console.log('Input validation passed:', response.data);
//     }
// }

// inputValidatin([1, 2, 3, 4, 5]);

/* Example 2:*/

// function validationInput(obj) {
//     const schema = zod.object({
//         username: zod.string().min(3).max(20),
//         password: zod.string().min(6).max(20),
//         email: zod.string().email(),
//     })
//     const response = schema.safeParse(obj);
//     console.log(response);
// }

// validationInput({
//     username: 'john',
//     password:"123456789",
//     email: 'nooruddin786@gmail.com'
// })

app.post('/', (req, res) => {
    const kidneys = req.body.kidneys;
    if(kidneys === undefined){
        return res.status(400).json({
            message: 'kidneys is missing',
            status: 'error',
        });
    }
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        return res.status(400).json({
            message: 'kidney is not valid',
            error: response.error.errors,
            status: 'error',
        });
    }
    res.json({
        response: response,
        message: 'kidney is valid',
        status: 'success',
    })
    // res.json({
    //     message: 'your login successful',
    //     status: 'success',
    // });
});

app.listen(3000, () => {
    console.log('your are seeing this, it means server is running fine on port 3000');
})