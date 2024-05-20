import express from "express";
import path, { join } from "path"
import { fileURLToPath } from "url";
import fs, { writeFile } from "fs"
import dotenv from "dotenv"
import cors from "cors"
import multer from "multer";
const __dirname=path.dirname(fileURLToPath(import.meta.url)) 
const app=express();
dotenv.config();
app.use(express.json())
app.use(cors({}))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = 'uploads/';
      // Create the uploads directory if it doesn't exist
      if (!fs.existsSync(uploadPath)){
        fs.mkdirSync(uploadPath);
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
  // Initialize multer with the storage engine
  const upload = multer({ storage });
   






app.get("/demo",(req,res,next)=>{
    res.set({"Content-Type":"image/png"})
    console.log(res.get('content-type'));
    // res.send('this is demo')
    // res.end();
    // res.end()
    next();
     
})


app.get("/demo",(req,res)=>{
     res.type('.png').send();
    console.log(res.get('content-type'));
    
})

app.get("/file", (req, res) => {
    // Send the file "demo.png" located in the "public" directory
    const filePath = path.join(__dirname, "demo.png");
    res.sendFile(filePath);
});


app.get("/file2",(req,res)=>{
    const fileName="demo.png";
    const option={
        root:__dirname
    }
    res.sendFile(fileName,option,(err)=>{
        if(err){
            console.error(err,"error uploading file")
            console.log(err.stack);
        }else{
                console.log('file uploaded succsefully',fileName)
        }
    })
})


fs.writeFile("demo.txt","this is demo file",(err)=>{
   if(err){
    console.log("error creating file",err)
   }
   else{
    console.log("fj")
   }
})




fs.appendFile("demo.txt","this is extension o demo",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file appended succsfully")
    }
})


fs.readFile("demo.txt",(err,data)=>{
    if(err){
        console.error(err)
    }else{
        console.log(data.toString());
    }
})



fs.unlink("demo.txt",(err)=>{

    if(err){
        console.log(err)
    }else{
        console.log('file deleted succsfully;')
    }
})

const jokes=[
    {
        id:1,
        title:"demo1",
        content:"this is demo data"
    },
    {
        id:2,
        title:"demo1",
        content:"this is demo data"
    },
    {
        id:3,
        title:"demo1",
        content:"this is demo data"
    },
    {
        id:4,
        title:"demo1",
        content:"this is demo data"
    },
    {
        id:5,
        title:"demo1",
        content:"this is demo data"
    },
    {
        id:6,
        title:"demo1",
        content:"this is demo data"
    }
]


app.get("/jokes",(req,res)=>{
res.send(jokes);
})



app.get("/merge",(req,res)=>{
    var d1,d2;
    fs.writeFile("demo1.txt","this is demo1",(err)=>{
        if(err){
            console.log(err)
            return
        }
    })

    fs.writeFile("demo2.txt","this is demo2",(err)=>{
        if(err){
            console.log(err)
            return
        }
    })

    fs.readFile("demo1.txt","utf-8",(err,data1)=>{
        if(err){
            console.error(err);
        }
        console.log(data1);
        fs.readFile("demo2.txt","utf-8",(err,data2)=>{
            if(err){
                console.error(err)
                return 
            }
            console.log(data2);
            fs.writeFile("demo3.txt",data1+"\n"+data2,(err)=>{
                if(err){
                    console.log(err);
                }
                console.log("merged succsfully");
                res.sendFile(path.join(__dirname,"demo3.txt"))
            });
            
        }
        )

    }

    

)        

})



function mergeFiles(file1Path, file2Path, outputPath) {
  // Read content from file1
  fs.readFile(file1Path, "utf8", (err1, data1) => {
    if (err1) {
      console.error("Error reading file1:", err1);
      return;
    }

    // Read content from file2
    fs.readFile(file2Path, "utf8", (err2, data2) => {
      if (err2) {
        console.error("Error reading file2:", err2);
        return;
      }

      // Combine content from both files
      const mergedContent = data1 + "\n" + data2;

      // Write merged content to the output file
      fs.writeFile(outputPath, mergedContent, (errWrite) => {
        if (errWrite) {
          console.error("Error writing output file:", errWrite);
        } else {
          console.log(`Files ${file1Path} and ${file2Path} merged successfully.`);
          console.log(`Merged content saved to ${outputPath}.`);
        }
      });
    });
  });
}

// Example usage:
const file1Path = "demo1.txt";
const file2Path = "demo2.txt";
const outputPath = "mergedOutput.txt";

mergeFiles(file1Path, file2Path, outputPath);



app.post("/upload",upload.single('image'),(req,res)=>{
    console.log(req)
    // console.log(req.image)
    res.sendFile(path.join(__dirname,"uploads",req.file.filename));
})


app.post("/uploads",upload.array('image',10),(req,res)=>{
    // console.log(req)
    // console.log(req.image)
    // res.sendFile(path.join(__dirname,"uploads",req.file.filename));
    // if(!req.files){
    //     res.send("please upload atleast one image")
    // }else{
        let mergedCOntent="";
        req.files.forEach((file)=>{
        mergedCOntent+=file+ '\n';

        })
        console.log(mergedCOntent)
        res.status(200).send(mergedCOntent+" demo 1");

    // }
})





const port=process.env.PORT || 3000
app.listen(port,()=>{console.log(`server started on port ${port}`);
    console.log(__dirname);
})

