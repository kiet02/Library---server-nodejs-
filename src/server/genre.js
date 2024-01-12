import {Book,genre} from "../connecting_db"
 
export  const getGenreAll = (req,res)=> new Promise( async (resolve,reject) =>{
        try {
    const listgenre = await genre.findAll()
        listgenre.map((e)=>{
        console.log(e.dataValues);
        })
     }

    catch{(error)=>{
            console.log(error);
    }}
}
)

export  const getGenre = (req,res)=> new Promise( async (resolve,reject) =>{
       try {
   const listgenre = await genre.findAll({
       where:{genre:req},
       include:[{model:Book,as:'Genre_Book'}]
       })
       listgenre.map((e)=>{
       console.log(e.dataValues);
       })
    }

   catch{(error)=>{
           console.log(error);
   }}
}
)
 

