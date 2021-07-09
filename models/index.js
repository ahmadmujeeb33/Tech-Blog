const User = require('./User');
const Posts = require('./Posts');
// const Comments = require('./Comments');

User.hasMany(Posts, {
    foreignKey: 'user_id',
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
})

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = {User, Posts};
