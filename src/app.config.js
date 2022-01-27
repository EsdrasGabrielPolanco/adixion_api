//let tokenExpiration = 6000 * 600 * 24; // expires in 24 hours (value expresed in miliseconds.)
const configs = {
	//App Name
	appName: 'Adixon Capital',
	//Route
	//baseUrl: 'www.Canchas.com',
	// port = 443,
	port: process.env.PORT || 3000,
	tokens: {
		// expiration: tokenExpiration,
		secretKey: 'inversion'
	},
	database: {
		name: 'adixon',
		//NO CAMBIAR. SOLO USAR LOCALHOST
		//url: 'mongodb://18.208.211.71:27017/'
		url: 'localhost',
		user:"root",
		password:"",
		type:"mysql"
	}
	/*  mail :{
    user: 'userstore@gmail.com',
    pass: 'pedrofabian2019clave123*'
  } */
};

module.exports = configs;
