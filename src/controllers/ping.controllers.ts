import { Request, Response } from "express"

async function pingServer(req: Request, res: Response) {
    try {
        return res.status(201).json({"status": 200, "message": "Backend working properly.", "ping": true})
    } catch (error : Error | any) {
        return res.status(500).json({"status": 500, "messagee": error.message, "ping": false})
    }
}

export {
    pingServer
}