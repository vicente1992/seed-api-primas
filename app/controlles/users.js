const { matchedData } = require('express-validator')
const { httpError } = require('../helpers/handleError')
const { PrismaClient } = require('@prisma/client')
const { request } = require('express')
const prisma = new PrismaClient()


const getItems = async (req, res) => {
    try {

        const data = await prisma.user.findMany();
        res.send({ data })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.user.findUnique({ where: { id: Number(id) } });
        res.send({ data })
    } catch (e) {
        httpError(res, e)
    }
}

const createItem = async (req, res) => {
    try {

        req = matchedData(req)
        const data = await prisma.user.create({ data: req })
        res.send({ data })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = async (req = request, res) => {

    try {

        const { id } = req.params;
        req = matchedData(req)

        const data = await prisma.user.update({
            where: { id: Number(id) },
            data: req,
        })

        return res.send({ data })
    } catch (e) {
        httpError(res, e)
    }
}

const deleteItem = async (req, res) => {
    try {

        const { id } = req.params;

        await prisma.user.delete({ where: { id: Number(id) } })

        return res.send({ message: 'Deletes' })
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }