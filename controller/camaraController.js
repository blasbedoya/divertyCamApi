import Camara from '../models/camara.js';

export async function getCamara(req, res) {
    try {
        const camaras = await Camara.find()
        res.json({ camaras})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getIdCamara(req, res) {
    try {
        const camaras = await Camara.findById(req.params.id)
        if (!camaras) {
            return res.status(404).json({ message: 'Camara no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function postCamara(req, res) {
    const camaras = new Camara(req.body);
    try {
        await camaras.save();
        res.status(201).json(camaras)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function putCamara(req, res) {
    try {
        const  camaras = await Camara.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!camaras) {
            return res.status(404).json({ message: 'Camara no encontrada'})
            }
            res.json(camaras)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteCamara(req, res) {
    try {
        const camaras = await Camara.findOneAndDelete(req.params.id);
        if (!camaras) {
            return res.status(404).json({ message: 'Camara no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getCamara,
    getIdCamara,
    postCamara,
    putCamara,
    deleteCamara
}