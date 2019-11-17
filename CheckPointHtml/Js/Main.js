document.getElementById("bold").onclick=bold;
var textarea = document.getElementById('textarea');
function bold(){
    if(textarea.style.fontWeight=="normal")
    {
         textarea.style.fontWeight="bold"
    }
   else(

    textarea.style.fontWeight="normal"

   )
}


document.getElementById("italic").onclick=italic;


function italic(){
    if( textarea.style.fontStyle=="normal")
    {
         textarea.style.fontStyle="italic"
    }
   else
   {
    textarea.style.fontStyle="normal"
   }
}

document.getElementById("aligner").onclick=aligner;

function aligner()
{
    if(textarea.style.textDecoration=="underline")
    {
        textarea.style.textDecoration="none"
    }
    else{
        textarea.style.textDecoration="underline"
    }
    
}


function sizeHandle()
{
    textarea.style.fontSize=document.getElementById("fontsize").value;
}

function textstyle()
{
    textarea.style.fontFamily=document.getElementById("text").value;
}