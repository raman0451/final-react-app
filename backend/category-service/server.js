const express= require('express')
const cors= require('cors')

const app= express()
app.use(cors('*'))
app.use(express.json())

//adding the routers
const routercategory= require('./routes/category')
app.use('/category', routercategory)

// same server port for cat and product can also be used
app.listen(4000, '0.0.0.0', ()=> {
    console.log('category-server started on port 4000')
})