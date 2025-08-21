const port = process.env.PORT | 3000;
const express = require("express");
require("./config/connect");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())

const userRoute = require("./routes/user.route")
const serviceRoute = require("./routes/service.route")
const proposalRoute = require("./routes/proposal.route")

app.use('/user', userRoute)
app.use('/service', serviceRoute)
app.use('/proposal', proposalRoute)

app.use('/image', express.static('./public'))

app.get('/', (req, res) => {
    res.send("Server Works!");
})


app.listen(port, (err) => {
    if(!err)
        console.log(`App Started And Listening on ${port}`)
    else
        console.error("there is an error", err)
})