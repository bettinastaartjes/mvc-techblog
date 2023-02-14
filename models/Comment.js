//no cambies este

//adding dependencies - sequelize, model, datatypes, and db connection
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');
//so that the comment odel extends to sequelize model
class Comment extends Model {}

// same setup as other models,
Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;