//adding dependencies - sequelize, model, datatypes, and db connection
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');
// use bcrypt for password hashing
const bcrypt = require('bcrypt');
const { underscoredIf } = require('sequelize/types/utils');

//so that the user model extends to sequelize model
class User extends Model {
    // check password as provided in the login route
    checkPassword (loginPW) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// columns & configuration
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            //turn on auto increment
            autIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define password
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // saying that the password has to be at least 4 characters lonh
            validate: { len: [4]}
        }
    },
    {
        //hooks for password hashing
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash
                (updatedUserData.password, 10);
                return updatedUserData;

            }
        },
        sequelize, timestamps: false,
        freezeTableName, underscored: true,
        modelName: 'User'
    }
);
