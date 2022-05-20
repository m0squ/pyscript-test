const express = require("express")

const app = express()
const root = __dirname.slice(0, -3)
app.use(express.static(root + "/js"))

function sendFile(res, file) {
    res.sendFile(file, {root: root + "/templates"})
}

app.get("/", (req, res) => {
    sendFile(res, "index.html")
})

app.listen(3000)