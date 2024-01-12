import { date } from "joi";
import { Authors, Book, genre, SaveBook ,Chapter, Bookreview, User, History} from "../connecting_db";

export const getBookAll = (req, res) =>
  new Promise(async (resolve, reject) => {
    console.log(req.fillbook,"getbookall");
    try {
      let data = [];
      let comments =[]
      var listbook;
      
        listbook = await Book.findAll();
        listbook.map((value)=>{
            data.push(value)
      
      })
      
      resolve({
        err: listbook[0].dataValues ? 0:1,
        data: listbook[0].dataValues ? data : 'error',
    
    })
    } catch {
      (error) => {
        console.log(error);
      }
      
    }
  });

export const getBook = (req, res) =>
  new Promise(async (resolve, reject) => {
    console.log(req.fillbook,"getbook");
    try {
      let data = [];
      let comments =[]
      var listbook;

       listbook = await Book.findAll({
          where: { idBook:req.fillbook },
        })
       let comment = await Bookreview.findAll({
          where:{interaction:req.fillbook},
          include:[{model:User}]
        })
        
        listbook.map((value)=>{
            data.push([value])
        })

        comment.map(value=>{
          comments.push(value)
        })
       data.push(comments)
 
      
      console.log(data);
      resolve({
        err: listbook[0].dataValues ? 0:1,
        data: listbook[0].dataValues ? data : 'error',
    
    })
    } catch {
      (error) => {
        console.log(error);
      }
      
    }
  });

export const getSaveBook = (req, res) =>
  new Promise(async (resolve, reject) => {
    console.log(req);
    try {
    
      let data = [];
      let listbook
      if(req.idBook){

 listbook = await SaveBook.findOrCreate({
        where: { idUser: req.idUser,idBook:req.idBook },
        defaults:{
            id:1,
            idUser:req.idUser,
            idBook:req.idBook,

        }
      });
      console.log('dsw');

      listbook.map((e) => {
        data.push(e.dataValues)
      });

      }else{
        listbook = await SaveBook.findAll({
            where: { idUser: req.idUser},
            include:[{model:Book}]
          });
          listbook.map((e) => {
            console.log(e.dataValues, "sd");
            data.push(e.dataValues)
          });
      }
     
 
      resolve({
        err: listbook[0].dataValues ? 0:1,
        data: listbook[0].dataValues ? data : 'error',
    
    })
    } catch {
      (error) => {
        console.log(error);
      };
    }
  });

  export const DeleteSaveBook =(req,res)=>{
    new Promise(async (resolve, reject) => {
      console.log(req);
      try {
       await SaveBook.destroy({
        where:{idUser:req.idUser,idBook:req.idBook}
       })
      } catch {
        (error) => {
          console.log(error);
        }}
      
    })}

  export const getChapter = (req, res) =>
    new Promise(async (resolve, reject) => {
      console.log(req);
      try {
        let data = [];
        let listbook
        if(req.idBook){
   listbook = await Chapter.findAll({
          where: {idBook:req.idBook },
        });
      
        listbook.map((e) => {
          // console.log(e.dataValues, "sd");
          data.push(e.dataValues)
        });
        console.log(data);
        }
        resolve({
          err: listbook[0].dataValues ? 0:1,
          data: listbook[0].dataValues ? data : 'error',
      
      })
      } catch {
        (error) => {
          console.log(error);
        };
      }
    });

  export const  getBookReview = (req, res) =>
  new Promise(async (resolve, reject) => {
    console.log(req.fillbook);
    try {
      let data = [];
      var listbook;
       listbook = await Bookreview.findAll({
          where: { idBook:req.fillbook },
          include:[{model:User}]
        })
        listbook.map((value)=>{
            data.push(value)
        })
      
      console.log(data);
      resolve({
        err: listbook[0].dataValues ? 0:1,
        data: listbook[0].dataValues ? data : 'error',
    
    })
    } catch {
      (error) => {
        console.log(error);
      }
      
    }
  });

  export const sethistories = (req, res) =>
    new Promise(async (resolve, reject) => {
      console.log(req,'sethts');
      try {
        let Ht
        
   Ht = await History.findOrCreate({
      where:{idUser:req.idUser,idBook:req.idBook},
      defaults:{
              location:req.location,
              createdAt: new Date(),
              updatedAt	: new Date(),
              idUser: req.idUser,
              idBook: req.idBook,
              complete: req.complete,
              chapter:req.chapter,
              value:req.value
      }
   })

        if(Ht[1] === true){
          console.log('sd');
        }else{
          
          await History.update({location:req.location,chapter:req.chapter,value:req.value}, {
            where: { idUser:req.idUser,idBook:req.idBook },
          });
          
          console.log('thoi');
        }
      
    resolve ({
      err: Ht[0].dataValues ? 0:1,
      data: Ht[0].dataValues ? "ok" : 'error',
    })
      } catch {
        (error) => {
          console.log(error);
        };
      }
    });

  export const gethistories = (req, res) =>
    new Promise(async (resolve, reject) => {
      console.log(req,"gethiss");
      try {
        let data = [];
        let Ht
   Ht = await History.findAll({
          where:{idUser:req.idUser, idBook:req.idBook}
        });
        Ht.map((value)=>{
          data.push(value)
      })
      console.log(Ht);
      resolve({
        err: Ht.length > 0 ? 0:1,
        data: Ht.length > 0 ? data : 'errorhistory',
    
    })
      } catch {
        (error) => {
          console.log(error);
        };
      }
    });

 