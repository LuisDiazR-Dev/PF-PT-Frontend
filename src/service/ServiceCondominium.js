import api from "../api/api";

// Obtener todos los condominios
const allCondominiums = async () => {
    const response = await api.get('/api/condominiums');
    console.log(response.data);
    return response.data;
}

// Obtener un condominio por ID
const condominiumById = async (id) => {
    const response = await api.get(`/api/condominium/${id}`);
    return response.data;
}

// Crear un nuevo condominio
const createCondominium = async (
    condominium_name,
    condominium_country,
    condominium_state,
    condominium_logo,
    condominiums_apartments_number,
    imageUrl,
    isActive
) => {
    const response = await api.post('/api/condominium', {
        condominium_name,                // Nombre del condominio
        condominium_country,             // País del condominio
        condominium_state,               // Estado del condominio
        condominium_logo,                // Logo del condominio
        condominiums_apartments_number,  // Número de apartamentos
        imageUrl,                        // Imagen del condominio
        isActive,                        // Estado de actividad
    });
    return response.data;
}

// Actualizar un condominio por ID
const updateCondominium = async (id, updatedData) => {
    const response = await api.put(`/api/condominium/${id}`, updatedData);
    return response.data;
}

// Desactivar un condominio por ID
const deactivateCondominium = async (id) => {
    const response = await api.delete(`/api/condominium/${id}`);
    return response.data;
}

// Obtener todas las imágenes de los condominios
const allCondominiumImages = async () => {
    const response = await api.get('/api/condominium/images');
    return response.data;
}

export default {
    allCondominiums,
    condominiumById,
    createCondominium,
    updateCondominium,
    deactivateCondominium,
    allCondominiumImages
};
