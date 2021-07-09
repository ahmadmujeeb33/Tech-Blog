// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// class Comments extends Model {

// }

// Comments.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     content: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },

//     User_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'User',
//           key: 'id',
//         },
//       },
    
//     Post_id: {

//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Posts',
//           key: 'id',
//         },
//     }
  
  
  
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'User',
//   }
// );

module.exports = Comments;
