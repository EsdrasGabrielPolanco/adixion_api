// import '@babel/polyfill';
const express 			= require('express');
const morgan 			= require('morgan');
const helmet 			= require('helmet');
const cors 				= require('cors');
const path 				= require('path');
const { Sequelize } 	= require('sequelize');
const {port, 	database_name, 	database_url, 	database_user, 	database_password, 	database_type, appName} = require ("./app.config")




const app = express();
app.use(cors());
app.use(
	express.json({
		limit: '20mb',
	})
);
app.use(
	express.urlencoded({
		extended: false,
	})
);
// app.use(compression());
app.use(morgan('tiny'));
app.use(helmet());

// Routes
const userRoutes = require('./routes/user.routes');
// import userRoutes from './routes/user.routes';

app.use(userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

async function main() {
	await app.listen(port);
	try {
		const sequelize = new Sequelize(database_name, database_user, database_password, {
			host: database_url,
			dialect: database_type
		  });
		await sequelize.authenticate();
		await console.log('Connection has been established successfully.');
		await console.log(`${appName} RESTful API server started on: ${port}`);
	} catch (error) {
		console.error(error)
		// console.log(`${appName} RESTful API server it's off :( `, error);
	}
}

main();
