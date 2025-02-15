const wordHandler = (option)=>{

    return option.fname + " is Handle with word handler.."
    
}

const pngHandler = (option)=>{
    return option.fname + " is Handle with PNG handler.."

}

const pdfHandler = (option)=>{
    return option.fname + " is Handle with PDF handler.."

}


const Handler = (file , cb)=>{
    var x = cb(
        {
            fname:file,
            size:"10000kb"
        }
    )

    console.log(x);
    
}


var FileName = "abc.pdf";

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