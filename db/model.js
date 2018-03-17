const Sequelize = require('sequelize');
const datatypes=Sequelize.DataTypes

const db=new Sequelize('splitwizedb','splituser','splitpass',{
    host: 'localhost',
    dialect:'mysql'
})


const table=db.define('splittable',{
    id: {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: datatypes.STRING,
    email:datatypes.STRING,
    moneytogive:datatypes.INTEGER,
    moneytotake:datatypes.INTEGER
})


db.sync({force: true})
    .then(() => console.info("Database configured"))
    .catch((err) => console.error(err));

module.exports={
    table
}