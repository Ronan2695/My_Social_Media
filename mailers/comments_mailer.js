// const nodeMailer = require('../config/nodemailer');



// //This is another way of exporting a method.
// exports.newComment = (comment)=> {
//     console.log('Inside a new comment mailer',comment);

//     nodeMailer.transporter.sendMail({
//         from:"rhtkmr000@gmail.com",
//         to:comment.user.email,
//         subject:"New Comment Published",
//         html:'<h1>Your comment is now published</h1>'
//     },(err,info)=>{
//         if(err){
//             console.log('Error in sending mail', err)
//             return;
//         }
//         console.log('Message sent', info)
//         return;
//     })
// }

const nodeMailer = require('../config/nodemailer');

// this is another way of exporting a method
exports.newComment = (comment) => {
    let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comments/new_comments.ejs')

    nodeMailer.transporter.sendMail({
       from: 'rhtkmr000@gmail.com',
       to: comment.user.email,
       subject: "New Comment Published!",
       html: htmlString
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}