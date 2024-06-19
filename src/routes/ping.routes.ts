import express from 'express'
import { pingServer } from '../controllers/ping.controllers'

const pingRouter = express.Router()

pingRouter.get('/', pingServer)

export {
    pingRouter
}