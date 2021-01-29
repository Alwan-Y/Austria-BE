import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      const { Room } = models

      History.belongsTo(Room, { foreignKey: 'id' })
    }
  }

  History.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    playerOneChoice: {
      type: DataTypes.STRING,
    },
    playerTwoChoice: {
      type: DataTypes.STRING,
    },
    result: {
      type: DataTypes.STRING,
    },
    roomId: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'History',
  })

  return History;
}