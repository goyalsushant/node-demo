import nodemailer from 'nodemailer'

let transporter

async function createTransporter() {
    let testAccount = await nodemailer.createTestAccount()

    transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })

    console.log('User', testAccount.user)
    console.log('Password', testAccount.pass)

    return transporter
}


export default createTransporter