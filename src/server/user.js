import {Bookreview, User} from "../connecting_db"
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const hasPassword = (password) =>bcrypt.hashSync(password,bcrypt.genSaltSync(8))

export  const register = (req,res)=> new Promise( async (resolve,reject) =>{
      const {email,password,name,image} = req
      console.log(email,password);
      let idUser = Math.floor(Math.random() * 9999999) + 100000
    try {
        const  users =  await User.findOrCreate({
             where: {email},
             defaults: {
              idUser:idUser,
               email,
               password:hasPassword(password),
               image:image,
               name:name,
               action:'2',
               history:2,
               createdAt:new Date(),
               updatedAt:new Date(),
             }
           });
     
  
    
        resolve({
            err: users[1] ? 0:1,
            mes: users[1] ? "Đăng ký thành công" : 'Tài khoản đã tồn tại',
        })
        }
        catch (error) {
         console.log(error);


       }
      })


export  const login = (req,res)=> new Promise( async (resolve,reject) =>{
  try {
    const {email,password} = req
    console.log(email,password);
      const  users =  await User.findOne({
           where: {email},
         });
         const ischeck = users && bcrypt.compareSync(password,users.password)
     
      resolve({
          err: ischeck ? 0:1,
          mes: ischeck ? "Đăng nhập thành công" : 'error',
          id :  users ? users.dataValues : users
      })
      }
      catch (error) {
       console.log(error);
     }
    

}


)

export  const comment = (req,res)=> new Promise( async (resolve,reject) =>{
  const {idUser,idBook,comment,rate,} = req
try {
  console.log(idUser,idBook,rate,comment);
    const  users =  await Bookreview.findOrCreate({
         where: {idUser:idUser,interaction:idBook},
         defaults: {
        
          idUser:idUser,
          comment:comment,
          rate: rate,
          createdAt:new Date(),
          updatedAt:new Date(),
          interaction:idBook,
        
         }
       });
       if(!users[1]){
         users[0].update(
        {
        comment: comment,
        rate:rate,
        updatedAt:new Date(),
      },
      {where:{idUser:idUser,interaction:idBook}}
      )
      resolve({mes:"Thay đổi bình luận thành công"})
       }
     
    resolve({
        err: users[1] ? 0:1,
        mes: users[1] ? "Đánh giá thành công" : 'Đánh giá thất bại',
    })
    }
    catch (error) {
     console.log(error);


   }
  })

