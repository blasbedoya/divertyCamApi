const url = 'http://localhost:3000/camara'

const listCamara = async () => {
    const content = document.getElementById('content')
    let response = ''
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type":  "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())
    .then(function(data) {
        let list = data.camaras
        list.map(function(camara) {
            response += `<tr><td>${camara.idCamara}</td>` +
            `<td>${camara.tipoCamara}</td>`+
            `<td>${camara.camara}</td>`+
            `<td>${camara.resolucion}</td>`+
            `<td><a href=editCamara.html?id=${camara._id}>Edit</a></td></tr>`
        })
        content.innerHTML = response
    })
}

const createCamara = async () => {
    const camara = {
        idCamara: document.getElementById('idCamara').value,
        tipoCamara: document.getElementById('tipoCamara').value,
        camara: document.getElementById('camara').value,
        resolucion: document.getElementById('resolucion').checked,
    };


    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(camara)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error al crear la camara');
        }

        alert('Camara creada con éxito');
    } catch (error) {
        console.error('Error al crear la camara:', error.message);
        alert('Error al crear la camara: ' + error.message);
    }
};

const editCamara = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    try {
        const response = await fetch(`http://localhost:3000/camara/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        document.getElementById('idCamara').value = data.idCamara || '';  // Si lo tienes
        document.getElementById('tipoCamara').value = data.tipoCamara;
        document.getElementById('camara').value = data.camara;
        document.getElementById('resolucion').value = data.resolucion;
    } catch (error) {
        console.error('Error al obtener la camara:', error);
        alert('Error al obtener la camara');
    }
};


const updateCamara = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    const camara = {
        idCamara: document.getElementById('idCamara').value,
        tipoCamara: document.getElementById('tipoCamara').value,
        camara: document.getElementById('camara').value,
        resolucion: document.getElementById('resolucion').value
    };

    try {
        const response = await fetch(`http://localhost:3000/camara/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(camara)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        alert('Camara actualizada exitosamente');
    } catch (error) {
        console.error('Error al actualizar la camara:', error);
        alert('Error al actualizar la camara');
    }
};
