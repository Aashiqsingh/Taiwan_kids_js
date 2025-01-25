// .pdf  -- pdfHandler
// .png  -- pngHandler
// .word
// .jpg


const wordHander = (option)=>{
    return option.fname + " wordHandller handle this file" 
}

const pdfHandler = (option)=>{
    return option.fname + " pdfHandler handle this file"
}

const pngHandler = (option)=>{
    return option.fname + " pngHandler handle this file"
}


var file = "abc.word";
var temp;

if(file.endsWith(".word"))
{
    temp = wordHander({fname:file,size:"1000kb"})
}
else if(file.endsWith(".pdf"))
{
    temp = pdfHandler({fname:file,size:"2000kb"})
}
else if(file.endsWith(".png")){
    temp = pngHandler({fname:file,size:"3000kb"})
}

console.log(temp);
