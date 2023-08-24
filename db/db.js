import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db.sqlite',
});

export const ScheduleFile = sequelize.define('File', {
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
	groupCode: {
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

(async () => {
	await sequelize.sync();
	await sequelize.sync({ alter: true });
})();
