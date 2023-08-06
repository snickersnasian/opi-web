import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
});

export const ScheduleFile = sequelize.define("File", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    studyYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export const Image = sequelize.define("Image", {
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

ScheduleFile.hasMany(Image, { onDelete: "CASCADE", hooks: true });
Image.belongsTo(ScheduleFile, { foreignKey: "FileId" });

(async () => {
    await sequelize.sync({ alter: true });
})();
