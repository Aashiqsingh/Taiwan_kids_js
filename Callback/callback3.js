const wordHandler = (option)=>{

    console.log(option.fname + " is Handle with word handler..");
    
}

const pngHandler = (option)=>{
    console.log(option.fname + " is Handle with PNG handler..");

}

const pdfHandler = (option)=>{
    console.log(option.fname + " is Handle with PDF handler..");

}


const Handler = (file , cb)=>{
    cb(
        {
            fname:file,
            size:"10000kb"
        }
    )
}


var FileName = "abc.png";

if(FileName.endsWith(".word"))
{
    Handler(FileName,wordHandler)
}
else if(FileName.endsWith(".png"))
{
    Handler(FileName,pngHandler)
}
else if(FileName.endsWith(".pdf")){
    Handler(FileName,pdfHandler)
}