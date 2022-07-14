const User = require('./User');
const Post = require('./Post');

//create associations
//references id column in User model to link user_id in Post model
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//references
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Post};