import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endpoint from "../../../_utils/SwitchEndpoints-local-deploy";

// Recuperar el estado de loggedIn desde localStorage al cargar la página
const initialLoggedIn = localStorage.getItem("loggedIn") === "true";

// Define la acción asíncrona para el inicio de sesión
export const loginAdmin = createAsyncThunk(
  "loginAdmin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(endpoint.registerLogin, formData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const loginAdminSlice = createSlice({
  name: "loginAdmin",
  initialState: {
    admin: null,
    loggedIn: initialLoggedIn, // Cargar el estado inicial de loggedIn desde localStorage
    loading: false,
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.loggedIn = false;
      state.admin = null;
      localStorage.removeItem("loggedIn"); // Remover de localStorage al hacer logout
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("imageUrl");
      localStorage.removeItem("isActive");
      localStorage.removeItem("SuscriptionId");
      localStorage.removeItem("token");
      localStorage.removeItem("id");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
        state.loggedIn = true;
        localStorage.setItem("loggedIn", "true"); // Guardar en localStorage cuando el login es exitoso
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error desconocido";
        state.loggedIn = false;
      });
  },
});

export const { logOut } = loginAdminSlice.actions;
export default loginAdminSlice.reducer;
