import { jwtDecode } from "jwt-decode";
export const BASE_API =  'https://psx-t222.onrender.com/';

//  'http://localhost:3001';
// 'https://psx-t222.onrender.com'


// const jwt = require('jsonwebtoken');


// const jwt = require('jsonwebtoken');

// module.exports.decodeTokenAndGetUserId = async (token) => {
//   try {
//     const decoded = jwt.verify(token, 'your_secret_key');
//     const userId = decoded.user_id;

//     return userId;
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// };



export const DecryptToken = () => {
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("psx_token") || "";
    }
  
    let decoded = {};
   
    if (token !== "" && token !== "undefined") {
      decoded = jwtDecode(token);
    }
  
    console.log("decoded", decoded);
    return decoded;
  };