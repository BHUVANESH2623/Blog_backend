import express from "express";
import postrouter from "./routes/posts.js";
import authrouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

const app=express();

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api/posts",postrouter)
app.use("/api/auth",authrouter)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})
  

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), function (req, res) {
    const file=req.file;
    res.status(200).json(file.filename);
})

app.listen(8080,()=>{
    console.log("connected");
})