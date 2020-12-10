const { EOF } = require('dns');
var fs=require('fs');
var count1=0;
var count2=0;
var http=require('http');

function read_file(req,res)
{
fs.readFile('mydata.txt',function(err,data){
    if(err){
        console.log('Error::'+err);
    }else
    {
        var file_words=data.toString().split(" ");
        for(fw of file_words)
        {
            console.log(fw+" ")
            count1++;
        }
    }
   
});
console.log("Count of words in mydata.txt::"+count1);
fs.readFile('myfile.txt',function(err,data){
    if(err){
        console.log("Error::"+err);
    }else{
        var data_words=data.toString().split(",");
        for(dw of data_words)
        {
            console.log(dw+" ");
            count2++;
        }
    }
});
console.log("Count of words in myfile.data::"+count2);
}

var srvr=http.createServer(read_file);
srvr.listen(7070);
console.log("Server started@7070");