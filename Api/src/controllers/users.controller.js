import { userQueries } from "../dataBase/queries.js";
import { getConnection } from "../dataBase/database.js";
import jwt from 'jsonwebtoken'
import { sql } from "../dataBase/database.js";
import bcrypt from "bcryptjs"
import { createTokenAccess } from "../libs/jwt.js";
import app from "../app.js";

export const register = async (req,res) =>{
    const {manager_name, user_type, company_name, rut, u_address, phone_number, email, u_password} = req.body
    try {
        const passwordHashed = await bcrypt.hash(u_password,10)
        const pool = await getConnection();
        const results = await pool
        .request()
        .input("user_type", sql.VarChar, user_type)
        .input("manager_name", sql.VarChar, manager_name)
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
        if(emailFound != email) return res.status(400).json({ message: 'El usuario no fue encontrado'})

        let passwordFound =  results.recordsets[0]
        passwordFound = passwordFound[0].u_password
        const passMatch = await bcrypt.compare(u_password, passwordFound);
        if(!passMatch)return res.status(400).json({ message: 'Error en las crendeciales'})

        let id = results.recordsets[0]
        id = id[0].id
        const token = await createTokenAccess({_id: id});
        res.cookie('token',token)
        res.json({message: 'Inicio de sesion exitoso'})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export const Update = async (req,res) => {
    const {manager_name, company_name, rut, u_address, phone_number ,u_state} = req.body
    const id = req.user._id
    console.log(id)
    if(!id) return res.status(400).json({message: 'No estas autorizado'})
    try {
        const pool = await getConnection();
        pool.request()
        .input('id', sql.Int, id)
        .input("manager_name", sql.VarChar, manager_name)
        .input("company_name", sql.VarChar, company_name)
        .input("rut", sql.VarChar, rut)
        .input("u_address", sql.VarChar, u_address)
        .input("phone_number", sql.VarChar, phone_number)
        .input("u_state", sql.VarChar, u_state)
        .query(userQueries.update)
        res.json({message: 'Datos actualizados'})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
    
}

export const logout = (req,res) => {
    res.cookie('token','', {expires : new Date(0),
    });
    return res.sendStatus(200);
}

export const VerifyToken = async (req,res) => {
    const { token } = req.cookies
    if(!token) return res.status(400).json({message: 'No estas autorizado'})

    jwt.verify(token, app.get('secret'), async (err, user) => {
        if(err) return res.status(401).json({message: 'No estas autorizado'})
        
        const id = user._id
        const pool = await getConnection();
        const results = await pool
        .request()
        .input('id',sql.Int, id)
        .query(userQueries.profile)
        if(!results) return res.status(401).json({message: 'No estas autorizado'})

        return res.json(
            results.recordsets
        )
    })
}

export const profile = async (req,res) => {
    let id = req.user._id
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id', id)
        .query(userQueries.profile)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const userType = async(req,res) =>{
    let id = req.user._id
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id', sql.Int, id)
        .query(userQueries.user_type)
        res.json(results.recordset[0].user_type)
        console.log(results.recordset[0].user_type)
    } catch (error) {
        console.log(error)
    }
}

export const talleres = async (req,res) => {
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .query(userQueries.talleres)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const empresas = async (req,res) => {
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .query(userQueries.empresas)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const acceptRequest = async (req,res) => {
    let id_user = req.user._id
    const { id_request } = req.params
     try {
        const pool = await getConnection()
        const results = await pool.request()
        .input("id_user", sql.Int, id_user)
        .input("id_request", sql.Int, id_request)
        .query(userQueries.acceptRequest)
        res.json(results)
     } catch (error) {
        console.log(error)
     }
}