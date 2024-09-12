import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/Reducer-CounterSlice";
import theme from "./features/setTheme/Reducer-themeSlice";
import adminRegisterSlice from "./features/register/createAdminSlice";
import loginAdminSlice from "./features/register/loginAdminSlice";
import adminUpdateSlice from "./features/register/updateAdminSlice";

import createCondominiumSlice from "./features/getCondominium/createCondominiumSlice";
import updateCondominiumSlice from "./features/getCondominium/updateCondominiumSlice";
import getCondoByIdSlice from "./features/getCondominium/getCondoById";
import deactivateCondominiumSlice from "./features/getCondominium/deleteCondoSlice";
import setCondoToAdminSlice from "./features/ToggleSwitchSelectCondo/setCondoToAdminSlice";
import condominiumSlice from "./features/getCondominium/condominiumSlice";

import createApartmentsSlice from "./features/getApartments/createApartmentsSlice";
import apartmentsSlice from "./features/getApartments/apartmentsSlice";

import adminReducer from "./features/tenants/getAdminsUsersSlice";
import getAdminByIdSlice from "./features/tenants/getAdminUserByIdSlice";
import deleteAdminReducer from "./features/tenants/deleteAdminSlice";
import updateAdminSlice from "./features/tenants/updateAdminSlice";

export default configureStore({
  reducer: {
    counter: counter,
    theme: theme,
    registerAdmin: adminRegisterSlice,
    loginAdmin: loginAdminSlice,
    updateAdmin: adminUpdateSlice,

    createCondominium: createCondominiumSlice,
    updateCondominium: updateCondominiumSlice,
    condominiums: condominiumSlice,
    getCondoById: getCondoByIdSlice,
    deactivateCondominium: deactivateCondominiumSlice,
    setCondoToAdmin: setCondoToAdminSlice,

    createApartment: createApartmentsSlice,
    apartments: apartmentsSlice,

    admins: adminReducer,
    getAdminById: getAdminByIdSlice,
    deleteAdmin: deleteAdminReducer,
    activateAdmin: updateAdminSlice,
  },
});
