//imports models to create the database connection
const user = require('./user');
const post = require('./post');
const comment = require('./comment');

user.hasMany(post,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

post.belongsTo(user,{
    foreignKey:'userId'
})
  
user.hasMany(comment,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

comment.belongsTo(user,{
    foreignKey:'userId'
}) 

post.hasMany(comment,{
    foreignKey: 'postId',
    onDelete: 'CASCADE'
})

comment.belongsTo(post,{
    foreignKey: 'postId',
})

module.exports = {user, post, comment};