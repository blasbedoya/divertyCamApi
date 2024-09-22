import { Schema, model} from 'mongoose'

const camaraSchema = new Schema ({
    idCamara: {type: Number, required: true, unique: true},
    tipoCamara: {type: String, required: true},
    camara: {type: String, required: true},
    resolucion: {type: String, required: true}
})

export default model("Camara", camaraSchema);