import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize('opi_dev', 'snickersnazn', '1', {
	dialect: 'postgres',
	host: 'localhost',
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
	studyYear: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			min: 1,
			max: 5,
		},
	},
});

export const Chat = sequelize.define(
	'chat',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		tableName: 'chats',
		timestamps: false,
	}
);

export const ChatMessage = sequelize.define(
	'chat_message',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: DataTypes.INTEGER,
		chat_id: DataTypes.INTEGER,
		text_content: DataTypes.TEXT,
		attachment: DataTypes.STRING(255),
		created_date: DataTypes.DATE,
	},
	{
		tableName: 'chat_messages',
		timestamps: false,
		createdAt: 'created_date',
	}
);

export const Credentials = sequelize.define(
	'credentials',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: DataTypes.INTEGER,
		login: DataTypes.STRING(255),
		mail: DataTypes.STRING(255),
		password: DataTypes.STRING(255),
	},
	{
		tableName: 'credentials',
		timestamps: false,
	}
);

export const User = sequelize.define(
	'user',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: DataTypes.STRING(255),
		middle_name: DataTypes.STRING(255),
		last_name: DataTypes.STRING(255),
		nickname: DataTypes.STRING(255),
		registration_date: DataTypes.DATE,
		mail: DataTypes.STRING(255),
	},
	{
		tableName: 'users',
		createdAt: 'registration_date',
	}
);

export const Discipline = sequelize.define(
	'discipline',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		short_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: 'disciplines',
		timestamps: false,
	}
);

export const TutorProfile = sequelize.define(
	'tutor_profile',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: 'tutor_profile',
		timestamps: false,
	}
);

export const TutorSubjects = sequelize.define(
	'tutor_subjects',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		tutor_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		subject_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tableName: 'tutor_subjects',
		timestamps: false,
	}
);

export const StudentProfile = sequelize.define(
	'student_profile',
	{
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		study_group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: 'student_profile',
		timestamps: false,
	}
);

export const StudyGroup = sequelize.define(
	'study_groups',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: 'study_groups',
		timestamps: false,
	}
);

export const Schedules = sequelize.define(
	'schedules',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		study_group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		updated_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		created_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		schedule_file: {
			type: DataTypes.BLOB('long'),
			allowNull: false,
		},
		schedule_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		schedule_short_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: 'schedules',
		updatedAt: 'updated_date',
		createdAt: 'created_date',
	}
);

export const UserRolesCategories = sequelize.define(
	'user_roles_categories',
	{
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		category_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
	},
	{
		tableName: 'user_roles_categories',
		timestamps: false,
	}
);

export const UserCategories = sequelize.define(
	'user_categories',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: 'user_categories',
		timestamps: false,
	}
);

export const News = sequelize.define(
	'news',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		news_text: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		attachment: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tableName: 'news',
		createdAt: 'created_date',
		updatedAt: 'updated_date',
	}
);

export const StorageAccess = sequelize.define(
	'storage_access',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		storage_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		is_owner: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		view: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		edit: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
	{
		tableName: 'storage_access',
		timestamps: false,
	}
);

export const StorageFile = sequelize.define(
	'storage_file',
	{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		storage_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		filename: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: 'storage_file',
		timestamps: false,
	}
);

export const StoragePage = sequelize.define(
	'storage_page',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		tableName: 'storage_page',
		timestamps: false,
	}
);

export const Forum = sequelize.define(
	'forum',
	{
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tableName: 'forum',
		createdAt: 'created_date',
	}
);

export const ForumMessage = sequelize.define(
	'forum_message',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		forum_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		text_content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		attachment: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updated_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tableName: 'forum_message',
		createdAt: 'created_date',
		updatedAt: 'updated_date',
	}
);

export const Newsletter = sequelize.define(
	'newsletter',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		text_content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		attachment: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tableName: 'newsletter',
		createdAt: 'created_date',
	}
);

export const NewsletterReceivers = sequelize.define(
	'newsletter_receivers',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		newsletter_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: 'newsletter_receivers',
		timestamps: false,
	}
);

NewsletterReceivers.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
NewsletterReceivers.belongsTo(Newsletter, {
	foreignKey: 'newsletter_id',
	onDelete: 'CASCADE',
});

ForumMessage.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
ForumMessage.belongsTo(Forum, { foreignKey: 'forum_id', onDelete: 'CASCADE' });

StorageAccess.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
StorageAccess.belongsTo(StoragePage, { foreignKey: 'storage_id', onDelete: 'CASCADE' });

StorageFile.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
StorageFile.belongsTo(StoragePage, { foreignKey: 'storage_id', onDelete: 'CASCADE' });

News.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

UserRolesCategories.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
UserRolesCategories.belongsTo(UserCategories, {
	foreignKey: 'category_id',
	onDelete: 'CASCADE',
});

StudentProfile.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
StudentProfile.belongsTo(StudyGroup, {
	foreignKey: 'study_group_id',
	onDelete: 'CASCADE',
});

Schedules.belongsTo(StudyGroup, { foreignKey: 'study_group_id', onDelete: 'CASCADE' });

TutorSubjects.belongsTo(TutorProfile, { foreignKey: 'tutor_id', onDelete: 'CASCADE' });
TutorSubjects.belongsTo(Discipline, { foreignKey: 'subject_id', onDelete: 'CASCADE' });

TutorProfile.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

ChatMessage.belongsTo(Chat, { foreignKey: 'chat_id', onDelete: 'CASCADE' });
ChatMessage.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

Credentials.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

(async () => {
	await sequelize.sync();
	// await sequelize.sync({ alter: true });
})();
