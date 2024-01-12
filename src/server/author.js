import { Authors, Book } from "../connecting_db";

export const getAuthorAll = (req, res) =>
  new Promise(async (resolve, reject) => {
    try {
      let data = [];
      var listauthor;
      console.log(req, "sss");
      if (req.fillauthor) {
        listauthor = await Authors.findAll({
           where:{name:req.fillauthor},
           include:[{model:Book,as:'Author_Book'}]
        });
        listauthor.map((e) => {
          //    console.log(e.dataValues);
          data.push(e.dataValues);
        });
        console.log(data);
      } else {
        listauthor = await Authors.findAll();
        listauthor.map((e) => {
          data.push(e.dataValues);
        });
      }

      resolve({
        err: listauthor[0].dataValues ? 0 : 1,
        data: listauthor[0].dataValues ? data : "error",
      });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  });
