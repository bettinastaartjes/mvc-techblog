
//user model
const User = require('./User');
//post model
const Post = require('./Post');
//comment model
const Model = require ('./Comment');

//post and user connection
Post.belongsTo(User, {
    foreignKey: 'user_Id',
    onDelete: 'cascade'
});

//post and comment connection
Post.hasMany (Comment, {
    foreignKey: 'post_Id',
    onDelete: 'cascade'
});

//comment to post connection
Comment.belongsTo(User, {
    foreignKey: 'user_Id',
    onDelete: 'cascade'
});

//exporting modules
module.exports = {
    User, Post, Comment};


