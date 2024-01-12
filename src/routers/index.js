

const user = require('./user')
const book = require('../routers/book')
const author = require('../routers/author')
const genre= require('../routers/genre')

const init =(app)=>{
        app.use('/api/v1/user',user)
        app.use('/api/v1/book',book)
        app.use('/api/v1/author',author)
        app.use('/api/v1/genre',genre)

        return app.use('/',(req,res)=>{
                return res.send('SERVER ON')
        })
}
export default init