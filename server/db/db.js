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
		unique: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING,
	},
	studyYear: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			min: 1,
			max: 5,
		},
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
