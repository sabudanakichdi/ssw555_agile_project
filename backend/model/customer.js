module.exports = (sequelize, Sequelize) => {

    const Customer = sequelize.define(“article”, {

        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        zip: {
            type: Sequelize.STRING
        },
    });
    return Article;
};