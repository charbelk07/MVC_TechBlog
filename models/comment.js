const {Model, Datatypes} = require('sequelize');
const connection = require('../config/connection');

class Comment extends Model{}

Comment.init({
   id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
   },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: Datatypes.INTEGER,
      references:{
         model:'user',
         key: 'id'
      }
    }
},
{
   sequelize: connection,
   freezeTableName: true,
   modelName: 'comment' 
})

module.exports = Comment;