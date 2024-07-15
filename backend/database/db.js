const Sequelize=require('sequelize');


let sequelize=new Sequelize('messenger','root','Karamveer@123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;