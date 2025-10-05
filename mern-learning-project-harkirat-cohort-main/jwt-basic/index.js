// There are basic three procees in jwt, 1st one is generating jwt, 2nd one is decoding it and the 3rd one is verifying it.

const jwt = require('jsonwebtoken');
const zod = require("zod");
const secretKey = "Nooruddin@786";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// this is for generating jwt
function generateJWT(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success) {
        return null
    }
    const signature = jwt.sign({
        username,
    }, secretKey)
    return signature;
}

const ans = generateJWT("Nooruddin@786", "fjdsetu984r375@iua");
console.log(ans);


// this is for decoding jwt
const decodeJWT = (token) =>{
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}

const decodeJWTAns = decodeJWT("roewur98usdjkjnjn");
console.log(decodeJWTAns);

// this is for verifying jwt
const verifyJWT = (token) =>{
    let ans = true;
    try{
        jwt.verify(token, secretKey);

    } catch(e){
        ans = false;
    }
    return ans;
}

