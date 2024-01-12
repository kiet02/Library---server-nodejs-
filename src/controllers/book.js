import { DeleteSaveBook,getBookAll, getChapter, getSaveBook,getBookReview, getBook, sethistories, gethistories, setBookReview} from "../server/book"

export const GetBookAll = async (req,res)=>{
    console.log(req.query);
    const Book = await getBookAll(req.query)
    return res.status(200).json(Book)

}

export const GetBook = async (req,res)=>{
    console.log(req.query);
    const Book = await getBook(req.query)
    return res.status(200).json(Book)

}

export const GetSaveBook = async (req,res)=>{
    console.log('dw');
    const SaveBook = await getSaveBook(req.query)
    return res.status(200).json(SaveBook)

}

export const deleteSaveBook= async (req,res)=>{
    const dele = await DeleteSaveBook(req.query)
    return res.status(200).json(dele)

}

export const GetChapter= async (req,res)=>{
    const chapter = await getChapter(req.query)
    return res.status(200).json(chapter)

}

export const GetBookReview= async (req,res)=>{
    const chapter = await getBookReview(req.query)
    return res.status(200).json(chapter)

}



export const SetHistories= async (req,res)=>{
    const chapter = await sethistories(req.query)
    return res.status(200).json(chapter)

}

export const GetHistories= async (req,res)=>{
    const chapter = await gethistories(req.query)
    return res.status(200).json(chapter)

}