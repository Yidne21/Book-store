const rentalModel = (sequelize, DataTypes) => {
  const Rental = sequelize.define("Rental", {
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
