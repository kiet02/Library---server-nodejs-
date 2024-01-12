import {getAuthor,getAuthorAll} from "../server/author"

export const GetAuthorAll= async (req,res)=>{
    console.log(req.query);
    const author = await getAuthorAll(req.query)
    return res.status(200).json(author)
}


export const GetAuthor = async (req,res)=>{
    const author = req.params.author
    const Author = await getAuthor(author)
    return res.status(200).json(Author)

}
    