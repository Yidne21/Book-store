const rentalModel = (sequelize, DataTypes) => {
  const Rental = sequelize.define("Rental", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    rentalDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    returnDate: {
      type: DataTypes.DATE,
    },
  });

  return Rental;
};

export default rentalModel;
