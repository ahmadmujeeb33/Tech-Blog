const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');
// const Comments = require('./Comments');

User.hasMany(Posts, {
    foreignKey: 'user_id',
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Posts.hasMany(Comments,{
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
})

Comments.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = {User, Posts,Comments};
