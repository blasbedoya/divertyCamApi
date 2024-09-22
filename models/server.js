import express, { json } from 'express';
import dbConnect from '../database/config.js';
import camara from '../routes/camaraRoute.js';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.listen()
        this.dbConecction()
        this.pathCamara = '/camara'
        this.route()
    }

    async dbConecction() {
        await dbConnect()
    }

    route() {
        this.app.use(json());
        this.app.use( cors() );
        this.app.use(this.pathCamara, camara)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running');
        })
    }
}

export default Server