var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.connect("mongodb://localhost:27017/ng5",function(err, response){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to db: " + db);
    }
}).then(function(){
    //console.log(data);
});

var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  

app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
}); 

var Schema = mongo.Schema;  
  
var TasksSchema = new Schema({      
 Name: { type: String   },       
 Description: { type: String   },   
},{ versionKey: false });  
   
  
var taskData = mongo.model('Tasks', TasksSchema, 'TaskList');


//1. Get
app.get('/api/getTasks',function(req, res){
    
    taskData.find({}, function(err, data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});

//2. Add
app.post('/api/saveUser',function(req, res){
    var mod = new taskData(req.body);
    if(req.body.Id != -1){
        //In case Insert
        mod.save(function(err, data){
            if(err){
                res.send(err);
            }else{
                res.send({data : 'Record has been inserted'});
            }
        });

    }else{
        //In case Update
        mod.findByIdAndUpdate(req.body.Id, {Name : req.body.Name, Description : req.body.Description}, function(err, data){
            if(err){
                res.send(err);
            }else{
                res.send({data : 'Record has been Updated'});
            }
        });
    }
});

//3. Delete
app.post("/api/delete",function(req,res){      
    model.remove({ _id: req.body.Id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })


app.listen(8080,function(){
    console.log('Example app listening on port 8080!');
});