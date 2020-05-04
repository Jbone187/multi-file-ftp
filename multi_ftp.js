var Client = require("ftp");
var fs = require('fs');

var c = new Client();
c.on('ready', function () {
  c.list('bit',function (err, list) {
    
      if (err) throw err;
      console.dir(list);
      
      for(var i = 0; i < list.length; i++){
        const name = list[i].name
           
        c.get(`/bit/${name}`, function(err, stream) {
        if (err) throw err;
         stream.once('close', function() { c.end(); });
          stream.pipe(fs.createWriteStream(`/home/jasen/node/folder/${name}`));
        });
      

      }
      
  });
  });
c.connect({ host: "", user: "", password: "", port: ""});
