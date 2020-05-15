module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.NOW
    }
  });
  return Tutorial;
};
