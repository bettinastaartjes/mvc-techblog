//adding dependencies - sequelize, model, datatypes, and db connection
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');
//so that the post model extends to sequelize model
class Post extends Model {}

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {sequelize}
);

module.exports = Post;