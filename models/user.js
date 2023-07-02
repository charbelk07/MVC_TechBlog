const { Model, DataTypes } = require("sequelize");
//importing sequilize from connections
const connection = require("../config/connection");

class User extends Model {}

User.init(
  {
       
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[8]
        }
    }
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'user', 
  },
);

module.exports =  User; 
