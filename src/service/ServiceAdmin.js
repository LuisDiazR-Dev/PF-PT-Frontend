import api from "../api/api";

// Obtener todos los administradores
const allAdmins = async () => {
    const response = await api.get('/api/admin');
    console.log(response.data);
    return response.data;
}

// Obtener un administrador por ID
const adminById = async (id) => {
    const response = await api.get(`/api/admin/${id}`);
    return response.data;
}

// Obtener un administrador por nombre de usuario
const adminByUsername = async (username) => {
    const response = await api.get(`/api/admin/name/${username}`);
    return response.data;
}

// Crear un nuevo administrador
const createAdmin = async (
    username,
    password,
    email,
    imageUrl,
    isActive,
    SuscriptionId
) => {
    const response = await api.post('/api/admin', {
        username,
        password,
        email,
        imageUrl,  // Imagen del administrador
        isActive,  // Estado de actividad
        SuscriptionId, // Suscripción asociada
    });
    return response.data;
}

// Actualizar un administrador por ID
const updateAdmin = async (id, updatedData) => {
    const response = await api.put(`/api/admin/${id}`, updatedData);
    return response.data;
}

// Eliminar un administrador por ID
const deleteAdmin = async (id) => {
    const response = await api.delete(`/api/admin/${id}`);
    return response.data;
}

export default {
    allAdmins,
    adminById,
    adminByUsername,
    createAdmin,
    updateAdmin,
    deleteAdmin
};
