let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');
let app = express();

app.use(cors());
app.use(bodyParser.json());
const port = 8181;
app.use(express.static(path.join(__dirname,'/public')));


app.get('/',function(req,res){
     res.sendFile('index.htm',{root:path.join(__dirname,'/')});
});
app.listen(process.env.PORT || port,function(){
	console.log('listening '+port)
});