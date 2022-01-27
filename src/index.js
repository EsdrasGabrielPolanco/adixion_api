// import '@babel/polyfill';
const express 			= require('express');
const morgan 			= require('morgan');
const helmet 			= require('helmet');
const cors 				= require('cors');
const path 				= require('path');
const { Sequelize } 	= require('sequelize');


const {
	appName,
	port,
	database: { name, url,user,password,type },
} = require('./app.config');

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
		const sequelize = new Sequelize(name, user, password, {
			host: url,
			dialect: type
		  });
		await sequelize.authenticate();
		await console.log('Connection has been established successfully.');
		await console.log(`${appName} RESTful API server started on: ${port}`);
	} catch (error) {
		console.log(`${appName} RESTful API server it's off :( `, error);
	}
}

main();
