export const sendData = async (formData) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/profesores/', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        console.log(result);

    }
    catch (error) {
        console.log(error);
    }
};

export const fetchData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/profesores/');
        console.log(response);

        if (!response.ok) {
            const errorInfo = `Status code: ${response.status}`;
            console.log(errorInfo);
            throw new Error(errorInfo);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        throw error; 
    }
};

export const fetchEventos = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/eventos/');
        console.log(response);
        if (!response.ok) {
            const errorInfo = `Status code: ${response.status}`;
            console.log(errorInfo);
            throw new Error(errorInfo);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        throw error; 
    }
};


const API_URL = 'http://127.0.0.1:8000/api/login/'; 

export const authenticateUser = async (username, password) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        console.log(JSON.stringify({
            username,
            password
        }))
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.error || 'Error desconocido al autenticar');
        }
    } catch (error) {
        throw new Error('Error en la red o en la configuración de la solicitud: ' + error.message);
    }
};
