module.exports = (sequelize, Sequelize) => {

    const Customer = sequelize.define(“article”, {

        salesAgreementId: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        isSigned: {
            type: Sequelize.BOOLEAN
        },
        signedBy: {
            type: Sequelize.STRING
        },
        isApproved: {
            type: Sequelize.STRING
        },
        generatedById: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        }
    });
    return Article;
};