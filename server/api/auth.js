import express from 'express'
import cookieParser from 'cookie-parser'
import { runInNewContext } from 'vm'

export const auth = (app) =>{
    app.use(cookieParser())
    // app.use(function (req, _res, next) {
    //   const { username } = req.cookies
    //   next()
    // })
    app.use(express.json()) // Parse & make HTTP request body available at `req.body`
    app.post('/login', (req, res) => {
        require('dotenv').config();
        const { name } = req.body;
        const authName = process.env.ALLOW_USER_NAME
        if(name === authName){
            res.cookie('english', 'allow', {
                maxAge: 5 * 60 * 1000,
                // secure: true,
                // sameSite: "None",
                httpOnly: false
            })
            res.status(200).json({
                status: 200,
                message: "Success"
            })
        } else {
            res.status(401).json({
                status: 401,
                message: "Not Allowed"
            })
        }
        return res;
    })
}