module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('History', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      round: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      playerOneUsername: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'set null',
      },
      playerTwoUsername: {
        type: Sequelize.STRING,
        allowNull: true,
        onDelete: 'set null',
      },
      playerOneChoice: {
        type: Sequelize.STRING,
      },
      playerTwoChoice: {
        type: Sequelize.STRING,
      },
      result: {
        type: Sequelize.STRING,
      },
      roomId: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'set null',
        references: {
          model: 'Room',
          key: 'id',
        },
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('History');
  },
}
