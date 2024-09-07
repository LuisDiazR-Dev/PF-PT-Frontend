import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/Reducer-CounterSlice";
import theme from "./features/setTheme/Reducer-themeSlice";
import adminRegisterSlice from "./features/register/createAdminSlice";
import loginAdminSlice from "./features/register/loginAdminSlice";
import createCondominiumSlice from "./features/getCondominium/createCondominiumSlice";
import updateCondominiumSlice from "./features/getCondominium/updateCondominiumSlice";
import getCondoByIdSlice from "./features/getCondominium/getCondoById";
import deactivateCondominiumSlice from "./features/getCondominium/deleteCondoSlice";

import condominiumSlice from "./features/getCondominium/condominiumSlice";
import apartmentSlice from "./features/getApartments/apartmentsSlice";
import adminReducer from "./features/tenants/getAdminsUsersSlice";
import createApartmensSlice from "./features/getApartments/createApartmensSlice";

export default configureStore({
  reducer: {
    counter: counter,
    theme: theme,

    createAdmin: adminRegisterSlice,
    loginAdmin: loginAdminSlice,
    createCondominium: createCondominiumSlice,
    updateCondominium: updateCondominiumSlice,
    condominiumSlice: condominiumSlice,
    getCondoById: getCondoByIdSlice,
    deactivateCondominium: deactivateCondominiumSlice,

    apartments: apartmentSlice,
    createApartment: createApartmensSlice,
    admin: adminReducer,
  },
});
