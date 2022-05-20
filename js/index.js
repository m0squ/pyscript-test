const express = require("express")

const app = express()
const root = __dirname.slice(0, -3)
app.use(express.static(root + "/js"))

function sendFile(res, file)
{
    res.sendFile(file, {root: root + "/templates", statusCode: 200, statusMessage: "OK"})
}

function addAddress(address, file, method = "get")
{
    if (method == "get")
    {
        app.get(address, (req, res) => sendFile(res, file))
    }
    else if (method == "post")
    {
        app.post(address, (req, res) => sendFile(res, file))
    }
    else
    {
        app.get(address, (req, res) => res.status(500).send("addAddress: unknown method: " + method))
    }
}

app.use((req, res, next)=> {
    console.log(req.method, req.url, res.statusCode, res.statusMessage);
    next();
})

addAddress("/", "index.html", "ciao")

app.listen(3000)