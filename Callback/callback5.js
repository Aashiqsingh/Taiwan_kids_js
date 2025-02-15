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
    return cb(
        {
            fname:file,
            size:"10000kb"
        }
    )
    
}


var FileName = "abc.word";
var flag;

if(FileName.endsWith(".word"))
{
    flag = Handler(FileName,wordHandler)
}
else if(FileName.endsWith(".png"))
{
    flag = Handler(FileName,pngHandler)
}
else if(FileName.endsWith(".pdf")){
    flag = Handler(FileName,pdfHandler)
}

console.log(flag);
