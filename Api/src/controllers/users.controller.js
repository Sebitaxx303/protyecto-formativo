import { userQueries } from "../dataBase/queries.js";
import { getConnection } from "../dataBase/database.js";
import jwt from 'jsonwebtoken'
import { sql } from "../dataBase/database.js";
import bcrypt from "bcryptjs"
import { createTokenAccess } from "../libs/jwt.js";
import app from "../app.js";

export const register = async (req,res) =>{
    const {user_type, company_name, rut, u_address, phone_number, email, u_password} = req.body
    try {
        const passwordHashed = await bcrypt.hash(u_password,10)
        const pool = await getConnection();
        const results = await pool
        .request()
        .input("user_type", sql.VarChar, user_type)
        .input("company_name", sql.VarChar, company_name)
        .input("rut", sql.VarChar, rut)
        .input("u_address", sql.VarChar, u_address)
        .input("phone_number", sql.VarChar, phone_number)
        .input("email", sql.VarChar, email)
        .input("u_password", sql.NVarChar, passwordHashed)
        .query(userQueries.register)
        let id = results.recordsets[0]
        id = id[0].id
        const token = await createTokenAccess({_id: id});
        res.cookie('token', token)
        res.json({message:'Registro exitoso'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const login = async (req,res) => {
    const { email, u_password } = req.body
    try {
        const pool = await getConnection();
        const results = await pool.request()
        .input('email', sql.VarChar, email)
        .input('u_password', sql.NVarChar, u_password)
        .query(userQueries.login)

        let emailFound = results.recordsets[0]
        emailFound = emailFound[0].email
        if(emailFound != email) return res.status(400).json({ message: 'user not found'})

        let passwordFound =  results.recordsets[0]
        passwordFound = passwordFound[0].u_password
        const passMatch = await bcrypt.compare(u_password, passwordFound);
        if(!passMatch)return res.status(400).json({ message: 'Error in cedentials'})

        let id = results.recordsets[0]
        id = id[0].id
        const token = await createTokenAccess({_id: id});
        res.cookie('token',token)
        res.json({message: 'Inicio de sesion exitoso'})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export const logout = (req,res) => {
    res.cookie('token','', {expires : new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req,res) => {
    let id = req.user._id
    const pool = await getConnection()
    const results = await pool.request()
    .input('id', id)
    .query(userQueries.profile)
    res.json(results)

}

export const VerifyToken = async (req,res) => {
    const { token } = req.cookies
    if(!token) return res.status(400).json({message: 'No estas autorizado'})

    jwt.verify(token, app.get('secret'), async (err, user) => {
        if(err) return res.status(401).json({message: 'No estas autorizado'})
        
        const id = user._id
        const pool = await getConnection();
        const results = await pool.request()
        .input('id',sql.Int, id)
        .query(userQueries.profile)
        if(!results) return res.status(401).json({message: 'No estas autorizado'})

        return res.json(results.recordsets)
    })
}