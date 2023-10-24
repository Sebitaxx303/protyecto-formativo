import { requestsQueries } from "../dataBase/queries.js";
import { getConnection } from "../dataBase/database.js";
import { sql } from "../dataBase/database.js";

export const addRequest = async (req,res) => {
    const id_user = req.user._id
    const {  request_type, description, amount} = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('id_user_request', sql.Int, id_user)
        .input('request_type', sql.VarChar, request_type)
        .input('description', sql.NVarChar, description)
        .input('amount', sql.Int, amount)
        .query(requestsQueries.addRequest)
        res.json(result.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const getRequests = async (req,res) => {
    const id_user = req.user._id
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id_user_request', sql.Int, id_user)
        .query(requestsQueries.getRequests)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}
export const getRequestsUser = async (req,res) => {
    const id_user = req.user._id
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id_user_request', sql.Int, id_user)
        .query(requestsQueries.getRequestsUser)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const getRequestsUserAcepted = async (req,res) => {
    const id_user = req.user._id
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id_user_request', sql.Int, id_user)
        .query(requestsQueries.getRequestsUserAcepted)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const getRequest = async (req,res) => {
    const id_user = req.user._id
    const id = req.params
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id_user_request', sql.Int, id_user)
        .input('id', sql.Int, id)
        .query(requestsQueries.getRequest)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}
export const updateRequest = async (req,res) => {
    const id_user_request = req.user._id
    const { id } = req.params
    const {  request_type, description, amount, r_state} = req.body
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id_user_request', sql.Int, id_user_request)
        .input('id', sql.Int, id)
        .input('request_type', sql.VarChar, request_type)
        .input('description', sql.NVarChar, description)
        .input('r_state', sql.NVarChar, r_state)
        .input('amount', sql.Int, amount)
        .query(requestsQueries.updateRequest)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}
export const deleteRequest = async (req,res) => {
    const id_user = req.user._id
    const { id } = req.params
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id_user_request', sql.Int, id_user)
        .input('id', sql.Int, id)
        .query(requestsQueries.deleteRequest)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}

export const DeletePostulation = async (req,res) => {
    const { id_d_r_t} = req.params
    try {
        const pool = await getConnection()
        const results = await pool.request()
        .input('id_d_r_t', sql.Int, id_d_r_t)
        .query(requestsQueries.deletePostulation)
        res.json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}