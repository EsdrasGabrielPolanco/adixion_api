const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');

const {
  database_name,
  database_url,
  database_user,
  database_password,
  database_type
} = require('../app.config');

const sequelize = new Sequelize(database_name, database_user, database_password, {
  host: database_url,
  dialect: database_type
});

class User extends Model {}

User.init({
  // Model attributes are defined here
  // userId: {
  // type: DataTypes.UUID,
  // defaultValue: DataTypes.UUIDV4
  // },
  id: {
    type: DataTypes.INTEGER,
    // defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profilePicture: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE // allowNull defaults to true

  },
  updatedAt: {
    type: DataTypes.DATE // allowNull defaults to true

  },
  deletedAt: {
    type: DataTypes.DATE // allowNull defaults to true

  }
}, {
  // Other model options go here
  sequelize,
  // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name

});
module.exports = User;