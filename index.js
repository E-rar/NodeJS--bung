
//ersetzt den content 'text' in der datei blog1.txt
var fs =require('fs');
fs.readFile('blog1.txt','utf-8',function(err,data){
    if(err) throw err;

    let newValue=data.replace(/text/gim,'Hallo Welt');
//erstellt eine Textdatei und schreibt etwas in sie rein
    fs.writeFile('blog1.txt',newValue,'utf-8',function(err,data){
        if(err) throw err;
        console.log('Done!');
    })
})
// erstellt eineen ordner assets wenn er noch nicht existiert
fs.appendFile('blog2.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  var dir = './assets';
function assets(){
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  else{
    fs.rmdir(dir,function(err){ //löscht den ordner assets
        if(err) throw err;
        console.log('assets deleted')
    })
  }
}
//   else if{
//     fs.unlink('./assets',function(err){
//         if(err) throw err;
//         console.log('File deleted');
//     })
//   }

  var delete1='delete.txt'

// fs.appendFile('delete.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
  
fs.unlink('./assets',function(err){ //löscht die datei deleted.txt
    if(err) throw err;
    console.log('deleted')
})
fs.rmdir(dir,function(err){ //löscht den ordner assets
    if(err) throw err;
    console.log('assets deleted')
})
assets();

fs.appendFile('Hello.txt','Hallo Text',function(err){
    if(err) throw err;
    console.log('Hallo.tct wurde erstellt')
})
fs.rename('Hello.txt','Hellow.txt',function(err){
    if(err) throw err;
    console.log('wurde umbenannt')
})

//===================LEV 2_1================================================
const data = require("./data.json");
console.log(data);
const dataContent=()=>data.forEach(e=>`${e.id}-${e.title}
${e.description}`)

fs.appendFile('data.txt',dataContent(),function(err){
    if(err) throw err;
    console.log('data wurde geschrieben ')
});

