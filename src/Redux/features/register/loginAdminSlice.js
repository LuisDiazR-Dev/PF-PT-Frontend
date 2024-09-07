import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define la acción asíncrona para el inicio de sesión
export const loginAdmin = createAsyncThunk('loginAdmin', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/auth/login', formData);
    return response.data; // Asegúrate de que response.data contenga admin y token
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data); // Manejo de errores del servidor
    } else {
      return rejectWithValue(error.message); // Manejo de errores generales
    }
  }
});

const loginAdminSlice = createSlice({
  name: 'loginAdmin',
  initialState: {
    admin: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        console.log("Respuesta exitosa:", action.payload); // Verifica la respuesta
        state.loading = false;
        state.admin = action.payload.admin;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('id', action.payload.admin.id);
        localStorage.setItem('username', action.payload.admin.username);
        localStorage.setItem('email', action.payload.admin.email);
        localStorage.setItem('imageUrl', action.payload.admin.imageUrl);
        localStorage.setItem('isActive', action.payload.admin.isActive);
        localStorage.setItem('SuscriptionId', action.payload.admin.SuscriptionId);
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        console.error("Error en login:", action.payload); // Verifica el error
        state.loading = false;
        state.error = action.payload || 'Error desconocido';
      });
  },
});

export default loginAdminSlice.reducer;


