import { Router } from 'express'
import { getCamara, getIdCamara, postCamara, putCamara, deleteCamara } from '../controller/camaraController.js';

const camaraRoute = Router();

camaraRoute.get('/', getCamara)
camaraRoute.get('/:id', getIdCamara)
camaraRoute.post('/', postCamara)
camaraRoute.put('/:id',  putCamara)
camaraRoute.delete('/:id', deleteCamara)

export default camaraRoute;