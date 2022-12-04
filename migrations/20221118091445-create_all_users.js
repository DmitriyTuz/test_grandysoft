'use strict';

const {userA, userB, subscription} = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    let gender

    let n
    let arrName = ['John', 'Steve', 'Ann', 'Julia']

    for (let i = 0; i < 200; i++) {
      n = getRandomArbitrary(0, 3)
      // console.log('n = ', n)
      if (['John', 'Steve'].includes(arrName[n])) {
        gender = 'male' } else gender = 'female'

      await userA.create({first_name: arrName[n], gender: gender})
      await userB.create({first_name: arrName[n], gender: gender})

    }

    let k,l

    for (let j = 0; j < 50000; j++) {
      k = getRandomArbitrary(1, 200)
      l = getRandomArbitrary(1, 200)

      let sub = await subscription.findAll({
        where: {
          userAId: k,
          userBId: l
        }
      })

      if (!sub[0] && k !== l) {
        await subscription.create({userAId: k, userBId: l})
      }

    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
