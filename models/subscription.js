'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subscription.init({
    userAId: DataTypes.INTEGER,
    userBId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subscription',
  });

  subscription.beforeCreate(async (instance, options) => {
    // try {
      const result = await subscription.findAll({
        where: {
          userAId: instance.userAId
        }
      });
      if(result.length === 150) {
        throw new Error(`Cannot create more instnaces for ${instance.userAId}`);
      }
  //   }
  //   catch(e) {
  //     throw e; // You must throw an error inside the hook in order to cancel
  //              // the real statement execution.
  //   }
  });
  return subscription;
};