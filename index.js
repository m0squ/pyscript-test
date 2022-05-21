console.log("=== JsGame ===\nPress ^C to quit")

const express = require("express")
const res = require("express/lib/response")

const app = express()

static_dir = __dirname + "/static"

app.use((req, res, next) => {
    res.on("finish", () => {
        switch (res.statusCode)
        {
            default:
                process.stdout.write("\033[31m")
                break
            case 200:
                process.stdout.write("\033[37m")
                break
            case 304:
                process.stdout.write("\033[33m")
                break
        }
        time = new Date()
        console.log("[" + time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + time.getDate(), time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "." + time.getMilliseconds() + "]", req.method, req.url, res.statusCode, res.statusMessage)
    })
    next()
})

class AddAddress
{
    constructor(url, file, method = "get")
    {
        this.url = url
        this.file = file
        this.method = method
        if (method == "get")
        {
            app.get(this.url, (req, res) => {
                this.req = req
                this.res = res
                this.sendFile()
            })
        }
        else if (method == "post")
        {
            app.post(this.url, (req, res) => {
                this.req = req
                this.res = res
                this.sendFile()
            })
        }
        else
        {
            app.get(this.url, (req, res) => {
                this.req = req
                this.res = res
                this.sendError(500, "addAddress: unknown method: " + this.method)
            })
        }
    }

    sendError(code, msg = "")
    {
        if (msg)
            this.res.status(code).send("<!DOCTYPE html><html><head><script>console.error(\"" + msg + "\")</script></head><body></body></html>")
        else
            this.res.status(code)
    }

    sendFile(file = this.file)
    {
        this.res.sendFile(file, {root: static_dir})
    }
}

new AddAddress("/", "index.html")

app.use(express.static(static_dir))

console.log("Listening on 127.0.0.1:3000...")
app.listen(3000)