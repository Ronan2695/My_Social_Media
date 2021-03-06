// const nodemailer = require('nodemailer');
// const ejs= require('ejs')
// const path= require('path');


// //This is the part which sends the emails
// let transporter=  nodemailer.createTransport({
//     service:'gmail',
//     host:'smtp.gmail.com',
//     port:587,
//     secure: false,
//     auth:{
//         user:'blackmantasmiles@gmail.com',  // ye correct h ? yes it is correct bro
//         pass:'IOpex@123'
//     }

// });

// let renderTemplate = (data,relativePath)=>{
//     let mailHTML;
//     ejs.renderFile(
//         path.join(__dirname,'../views/mailers',relativePath),
//         data,
//         function(err,template)
//         {
//             if(err)
//             {
//                 console.log('Error in rendering template');
//                 return;
//             }
//             mailHTML = template;
//         }
//     )
//     return mailHTML;
// }

// module.export={
//     transporter:transporter,
//     renderTemplate: renderTemplate
// }

const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path')
const env = require('./environment');

let transporter = nodemailer.createTransport(env.smtp);


let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err, template){
         if (err){console.log('error in rendering template',err); return}
         
         mailHTML = template;
        }
    )

    return mailHTML;
}


module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}