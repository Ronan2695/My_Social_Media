const nodemailer = require('nodemailer');
const ejs= require('ejs')
const path= require('path');


//This is the part which sends the emails
let transporter=  nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:'False',
    auth:{
        user:'rhtkmr000',
        pass:'AdrollNocEngineer@2695'
    }

});

let renderTemplate = (data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template)
        {
            if(err)
            {
                console.log('Error in rendering template');
                return;
            }
            mailHTML = template;
        }
    )
    return mailHTML;
}

module.export={
    transporter:transporter,
    renderTemplate: renderTemplate
}