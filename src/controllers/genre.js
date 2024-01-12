import {getGenre,getGenreAll} from "../server/genre"


export const GetGenreAll = async (req,res)=>{
    res.send('List of genres');
    const book = await getGenreAll(req.body)
    return res.status(200).json({
        mes:'0'
    })
}

export const GetGenre = async (req,res)=>{
    const genre = req.params.genre
    res.send(`List of genre ${genre}`);
    const Genre = await getGenre(genre)
    return res.status(200).json({
        mes:'0'
    })
}
