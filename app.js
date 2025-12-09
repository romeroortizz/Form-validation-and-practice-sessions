import express from 'express'
import path from 'node:path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { usersRouter } from "./routes/userRouter.js"

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

app.use("/",usersRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Express app listening on port ${PORT}!`)
})




//concepts to further investigate
// throw error vs console.error