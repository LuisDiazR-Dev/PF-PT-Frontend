import api from "../api/api";

// Obtener todos los apartamentos
const allApartments = async () => {
    const response = await api.get('/api/apartments');
    const resultApartments = response.data;
    console.log(response.data);
    return resultApartments;
}

// Buscar apartamento por nombre (si aplicara)
// const search = async (name) => {
//     const response = await api.get('/#/', {
//         params: {
//             name: name
//         }
//     });
//     const resultData = response.data;
//     return resultData;
// }

// Obtener apartamento por ID
const apartmentId = async (id) => {
    const response = await api.get(`/api/apartments/${id}`);
    return response.data;
}

// Crear un nuevo apartamento
const createApartment = async (
    numberApartment,
    size,
    status,
    isActive,
    imageUrl,
) => {
    const response = await api.post('/api/apartments', {
        numberApartment,
        size,
        status,
        isActive,
        imageUrl,
    });
    return response.data;
}

// Actualizar un apartamento por ID
const updateApartment = async (id, updatedData) => {
    const response = await api.put(`/api/apartments/${id}`, updatedData);
    return response.data;
}

// Desactivar un apartamento por ID
const deactivateApartment = async (id) => {
    const response = await api.delete(`/api/apartments/${id}`);
    return response.data;
}

export default {
    allApartments,
   // search,
    apartmentId,
    createApartment,
    updateApartment,
    deactivateApartment
};
