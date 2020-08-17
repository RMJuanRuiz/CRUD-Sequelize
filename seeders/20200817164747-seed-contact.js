'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Contacts', [{
                firstname: 'Juan',
                lastname: 'Ruiz',
                phone: "35891238",
                email: "jua@gmail.com",
                createdAt: new Date().toDateString(),
                updatedAt: new Date().toDateString()
            },
            {
                firstname: 'Pablo',
                lastname: 'Munoz',
                phone: "28258984",
                email: "pablo@gmail.com",
                createdAt: new Date().toDateString(),
                updatedAt: new Date().toDateString()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};