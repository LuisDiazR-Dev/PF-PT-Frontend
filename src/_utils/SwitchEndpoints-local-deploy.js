// const endpointURL = "http://localhost:3001";

// ! Deploy
const endpointURL = 'https://pf-pt-backend-production.up.railway.app'

const endpoint = Object.freeze({
  registerLogin: `${endpointURL}/api/auth/login`,
  registerCreate: `${endpointURL}/api/admin`,
  registerUpdate: `${endpointURL}/api/admin`,

  getApartment: `${endpointURL}/api/apartments`,
  createApartment: `${endpointURL}/api/apartments`,
  updateApartment: (id) => `${endpointURL}/api/apartments/${id}`,
  deleteApartment: (id) => `${endpointURL}/api/apartments/${id}`,

  getSuscriptions: `${endpointURL}/api/suscriptions`,

  condominiumsGet: `${endpointURL}/api/condominiums`,
  condominiumsGetById:  (id) => `${endpointURL}/api/condominiums/${id}`,
  condominiumsPost: `${endpointURL}/api/condominiums`,
  condominiumsDelete:  (id) => `${endpointURL}/api/condominiums/${id}`,
  condominiumsPut:  (id) => `${endpointURL}/api/condominiums/${id}`,

  AdminGet:  `${endpointURL}/api/admin`,
  AdminGetById:  (id) => `${endpointURL}/api/admin/${id}`,
  AdminDelete:  (id) => `${endpointURL}/api/admin/${id}`,
  AdminPut:  (id) => `${endpointURL}/api/admin/${id}`,

  GoogleLogin: `${endpointURL}/api/auth/google`,
  
});

export default endpoint;
