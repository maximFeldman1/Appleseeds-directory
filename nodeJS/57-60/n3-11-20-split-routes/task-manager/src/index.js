const express = require('express')
require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')
const restaurantRouter = require('./routers/restaurant');


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)
app.use(restaurantRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})