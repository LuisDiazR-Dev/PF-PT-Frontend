// ! Local
const endpointURL = 'http://localhost:3001'

// ! Deploy
// const endpointURL = 'http://localhost:3001'


const endpoint = Object.freeze({

	registerLogin:		`${endpointURL}/api/auth/login`,
	registerCreate:		"http://localhost:3001/api/admin",
	registerUpdate:		"http://localhost:3001/api/admin",

	getApartment: 		"http://localhost:3001/api/apartments",
	createApartment: 	"http://localhost:3001/api/apartments"




})

export default endpoint