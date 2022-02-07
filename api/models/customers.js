'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.NUMERIC,
    phone_number: DataTypes.NUMERIC,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customers',
  });
  return Customers;
};