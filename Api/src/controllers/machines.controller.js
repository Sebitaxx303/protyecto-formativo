import { machinesQueries } from "../dataBase/queries.js";
import { getConnection } from "../dataBase/database.js";
import { sql } from "../dataBase/database.js";

export const addMachine = async (req,res) => {
    const id_user =  req.user._id
    const {machine_type, mach_description, photo } = req.body
    try {
        const pool = await getConnection();
        const results = await pool.request()
        .input("id_user", sql.Int, id_user)
        .input("machine_type", sql.VarChar, machine_type)
        .input("mach_description", sql.NVarChar, mach_description)
        .input("photo", sql.VarBinary, photo )
        .query(machinesQueries.addmachine)
        res.status(200).json({message: 'se registro la maquina de manera exitosa'})
        } catch (error) {
        res.status(500).json({error})
    }

}
export const getMachines= async (req,res) => {
    const id_user = req.user._id
    try {
        const pool = await getConnection();
        const results = await pool.request()
        .input("id_user",sql.Int,id_user)
        .query(machinesQueries.getmachines)
        res.status(200).json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}
export const getMachine= async (req,res) => {
    const id_user = req.user._id
    const {id_machine} = req.body
    try {
        const pool = await getConnection();
        const results = await pool.request()
        .input("id_user",sql.Int,id_user)
        .input("id_machine",sql.Int,id_machine)
        .query(machinesQueries.getmachine)
        res.status(200).json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}
export const updateMachine = async (req,res) => {
    const id_user = req.user._id
    const { id_machine, machine_type, mach_description, photo } = req.body
    try {
        const pool = await getConnection();
        const results = await pool.request()
        .input("id_user", sql.Int, id_user)
        .input("id_machine", sql.Int, id_machine)
        .input("machine_type", sql.VarChar, machine_type)
        .input("mach_description", sql.NVarChar, mach_description)
        .input("photo", sql.VarBinary, photo)
        .query(machinesQueries.updatemachine)
        res.status(200).json(results.recordset)
    } catch (error) {
        console.log(error)
    }
}
export const deleteMachine = async (req, res) => {
    const id_user = req.user._id
    const  { id_machine }  = req.params
    try {
        const pool = await getConnection();
        const results = await pool.request()
        .input("id_user", sql.Int, id_user)
        .input("id_machine", sql.Int, id_machine)
        .query(machinesQueries.deleteMachine)
        res.status(200).json({message: 'Eliminada con exito'})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}