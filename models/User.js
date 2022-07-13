//destructure MODEL and DATATYPES from sequelize
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create user model and extend classes from Model object
class User extends Model {}

//define table columns and config
User.init(
    //Table colum definitions
    {
        //define id column
        id: {
            //use sequelize datatypes to define type of data
            type: DataTypes.INTEGER,
            //NOT NULL
            allowNull: false,
            //define as primary key
            primaryKey: true,
            autoIncrement: true
        },
        //username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        //password column
        password: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                //must be at least 4 characters long
                len : [4]
            }
        }
    },
    //Table config
    {
        //pass imported sequelize connection
        sequelize,
        //set suto-timestamp to false
        timestamps: false,
        //keep db name singular
        freezeTableName: true,
        //use underscore notation
        underscored: true,
        //force lowercase model name in db
        modelName: 'user'
    }
);

module.exports = User;