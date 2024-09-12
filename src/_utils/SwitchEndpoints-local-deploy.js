// ! Local
const endpointURL = "http://localhost:3001";

// ! Deploy
// const endpointURL = 'http://localhost:3001'

const endpoint = Object.freeze({
  registerLogin: `${endpointURL}/api/auth/login`,
  registerCreate: `${endpointURL}/api/admin`,
  registerUpdate: `${endpointURL}/api/admin`,

  getApartment: `${endpointURL}/api/apartments`,
  createApartment: `${endpointURL}/api/apartments`,
  updateApartment: (id) => `${endpointURL}/api/apartments/${id}`,
  deleteApartment: (id) => `${endpointURL}/api/apartments/${id}`,
});

export default endpoint;
