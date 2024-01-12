// import { data } from "../data/data";
let data = []
const { Sequelize, DataTypes } = require("sequelize");
// Option 3: Passing parameters separately (other dialects)

const sequelize = new Sequelize("library", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});


const Book= sequelize.define(
  "book",
  {
    idBook: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,

    },
    name: {
      type: Sequelize.DataTypes.STRING,
    },
    img: {
      type: Sequelize.DataTypes.STRING,
    },
    author: {
      type: Sequelize.DataTypes.INTEGER,
    },
    genre: {
      type: Sequelize.DataTypes.INTEGER,
      foreignKey:true
    },
    describe: {
      type: Sequelize.DataTypes.STRING,
    },
  },

);



const Authors = sequelize.define("Authors", {
  // id: { type: Sequelize.DataTypes.STRING , primaryKey:true },

  name: { type: Sequelize.DataTypes.STRING , primaryKey:true },
  img: { type: Sequelize.DataTypes.STRING },

});


const Chapter = sequelize.define("Chapter", {
  idBook: {
    type: Sequelize.DataTypes.INTEGER,
  },
  chapter: { type: Sequelize.DataTypes.STRING },
  content:{ type: Sequelize.DataTypes.STRING },
});

const genre = sequelize.define("Genre", {
  // id: {
  //   type: Sequelize.DataTypes.INTEGER,
  //   autoIncrement:true
  // },
  name: { type: Sequelize.DataTypes.STRING,
    primaryKey:true,
   },
  
});

const Bookreview = sequelize.define("Bookreview", {
  id:{ 
    type : Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  comment: { type: Sequelize.DataTypes.STRING },
  rate: { type: Sequelize.DataTypes.FLOAT },

});

const User = sequelize.define("User", {
  idUser: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey:true
  },
  email: { type: Sequelize.DataTypes.STRING },
  password: { type: Sequelize.DataTypes.STRING },
  image: { type: Sequelize.DataTypes.STRING },
  name: { type: Sequelize.DataTypes.STRING },

});

const SaveBook = sequelize.define("SaveBook",{
  // id: {
  //   type: Sequelize.DataTypes.INTEGER,
  //   // autoIncrementL:true
  // },
})

const History = sequelize.define("hitstory",{
  
 location: { type: Sequelize.DataTypes.STRING },
 chapter: { type: Sequelize.DataTypes.INTEGER },
 complete:{type: Sequelize.DataTypes.INTEGER },
 value:{type: Sequelize.DataTypes.FLOAT },
})












const fill = async()=>{
const res = await genre.findAll({
include:{model:Book,as:"Chapter_Book"}
})
if(res)(
  data = res.map(e=>e.dataValues.Chapter_Book.dataValues)
)
console.log(data);
}
// fill()

  // Hàm sẽ được gọi liên tục mỗi khoảng thời gian
  // const intervalId = setInterval(() => {
  //   console.log(data);

  //   // Điều kiện dừng (ví dụ: sau 5 lần thực hiện)
  //   if (data.length>0) {
  //     clearInterval(intervalId); // Dừng setInterval
  //   }
  // }, 1000); 
  



  

Authors.belongsTo(Book,{foreignKey:'name',as:'Author_Book',targetKey:'author'}); 
Book.hasOne(Authors,{foreignKey:'id',as:'Author_Book',targetKey:'author'}); 
Chapter.belongsTo(Book,{foreignKey:'idBook',as:'Chapter_Book',targetKey:'idBook'}); 
genre.belongsTo(Book,{foreignKey:'name',as:'Genre_Book',targetKey:'genre'}); 
Bookreview.belongsTo(Book,{foreignKey:'interaction'})
Bookreview.belongsTo(User,{foreignKey:'idUser'})

SaveBook.belongsTo(User,{foreignKey:'idUser'})
SaveBook.belongsTo(Book,{foreignKey:'idBook'})


History.belongsTo(User,{foreignKey:'idUser'})
History.belongsTo(Book,{foreignKey:'idBook'})












sequelize.sync();
sequelize.authenticate().then(()=>{
  console.log("Connection has been established successfully.");
}).catch((error)=>{
  console.error("Unable to connect to the database:", error);
})
export { Book,Authors,Chapter,Bookreview,History,SaveBook,User,genre };

