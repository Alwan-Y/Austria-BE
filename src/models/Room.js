import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      const { History } = models

      Room.hasMany(History, { foreignKey: 'id' })
    }
  }

  Room.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstPlayerUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondPlayerUsername: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Room',
  })

  return Room;
}
