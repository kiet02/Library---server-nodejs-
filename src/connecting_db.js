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
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Authors',
        key: 'id'
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Genres',
        key: 'id'
      }
    },
    describe: {
      type: Sequelize.DataTypes.STRING,
    },
  },

);



const Authors = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  img: DataTypes.STRING
});


const Chapter = sequelize.define("Chapter", {
  idBook: {
    type: Sequelize.DataTypes.INTEGER,
  },
  chapter: { type: Sequelize.DataTypes.STRING },
  content:{ type: Sequelize.DataTypes.STRING },
});

const genre = sequelize.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
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

const History = sequelize.define("History", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location: Sequelize.DataTypes.STRING,
  chapter: Sequelize.DataTypes.INTEGER,
  complete: Sequelize.DataTypes.INTEGER,
  value: Sequelize.DataTypes.FLOAT,
  idUser: Sequelize.DataTypes.INTEGER,
  idBook: Sequelize.DataTypes.INTEGER
});













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
  



  

Authors.hasMany(Book, { foreignKey: 'authorId', as: 'Books' });
Book.belongsTo(Authors, { foreignKey: 'authorId', as: 'Author' });
Chapter.belongsTo(Book,{foreignKey:'idBook',as:'Chapter_Book',targetKey:'idBook'}); 
genre.hasMany(Book, { foreignKey: 'genreId', as: 'Books' });
Book.belongsTo(genre, { foreignKey: 'genreId', as: 'Genre' });

Bookreview.belongsTo(Book,{foreignKey:'interaction'})
Bookreview.belongsTo(User,{foreignKey:'idUser'})

SaveBook.belongsTo(User,{foreignKey:'idUser'})
SaveBook.belongsTo(Book,{foreignKey:'idBook'})


History.belongsTo(User, { foreignKey: 'idUser' });
History.belongsTo(Book, { foreignKey: 'idBook' });











sequelize.sync();
sequelize.authenticate().then(()=>{
  console.log("Connection has been established successfully.");
}).catch((error)=>{
  console.error("Unable to connect to the database:", error);
})
export { Book,Authors,Chapter,Bookreview,History,SaveBook,User,genre };

