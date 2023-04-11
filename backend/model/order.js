module.exports = (sequelize, Sequelize) => {

    const Customer = sequelize.define(“article”, {

        utilityCompany: {
            type: Sequelize.STRING
        },
        energyUsage: {
            type: Sequelize.NUMBER
        },
        roofType: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        },
        salesAgreementId: {
            type: Sequelize.STRING
        },
        orderAmount: {
            type: Sequelize.NUMBER
        }
    });
    return Article;
};