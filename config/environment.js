// Commong file for accessing keys and env varibles, only view to developer
//Development Environment
const development =
{
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'blahsomething',
    db:'social_media_development',
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'blackmantasmiles@gmail.com',
            pass: 'IOpex@123'
        }
    },
    google_client_id:"356679320092-gd5q75ah3lrsmqs70fg9uklfsurortfp.apps.googleusercontent.com",
    google_client_secret:"vqtT5awyNvkSaqM4f-T4w18n",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",
    jwt_secret:'codeial'
}

const production=
{
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIAL_SESSION_COOKIE_KEY,
    db:process.env.CODEIAL_DB,
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.CODEIAL_GMAIL_USERNAME,
            pass: process.env.CODEIAL_GMAIL_PASSWORD
        }
    },
    google_client_id:process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret:process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url:process.env.CODEIAL_CALL_BACK_URL,
    jwt_secret:process.env.CODEIAL_JWT_SECRET

}



module.exports= eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT)