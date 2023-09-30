//dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql = require('mysql')

//define the express operation

const app=express();
const port=3000;

app.use(cors());
app.use(bodyParser.json())

//conntection

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'db_client'
})

db.connect(err=>{
    if(err){
        console.error('connection is not established with the dB',err);
    }
    else{
        console.log('Connected to db')
    }
    
    
    });
    
    app.listen(port,()=>{console.log('server port estbalished on 3000')})

    //add Client
    app.post('/addClient',(req,res)=>{
        const {c_id,f_name,l_name,email}=req.body;
        const sql='insert into client values(?,?,?,?)';
        db.query(sql,[c_id,f_name,l_name,email],(err,result)=>{
            if(err){
                console.error('Error in adding client',err);
                res.status(500).json({error:'An error occured'});
            }else{
                res.status(200).json({message:'Client added successfully'});
            }
    
    
        });
        });

    //view all client
    app.get('/viewClients',(req,res)=>{
        const sql='select * from client';
        db.query(sql,(err,result)=>{
            if(err){
            console.error('Error in fetching the client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json(result);
        }
        
        
        });
        });
         
    //delete CLient
    app.delete('/deleteclient/:id',(req,res)=>{
        const id=req.params.id;
        const sql='delete from client where c_id=?';
        db.query(sql,[id],(err,result)=>{
            if(err){
            console.error('Error in deleting the client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:' client deleted successfully'});
        }
       
        });
        });
    
        //edit client

        //add meeting
        app.post('/addMeeting',(req,res)=>{
        const {m_id,f_name,l_name,email,address,date,city,time}=req.body;
        const sql='insert into meeting values(?,?,?,?,?,?,?,?)';
        db.query(sql,[m_id,f_name,l_name,email,address,date,city,time],(err,result)=>{
            if(err){
                console.error('Error in adding the meeting',err);
                res.status(500).json({error:'An error occured'});
            }else{
                res.status(200).json({message:'Meeting added successfully'});
            }
    
    
        });
        });

        //view Meetings
        app.get('/viewMeeting',(req,res)=>{
            const sql='select * from meeting';
            db.query(sql,(err,result)=>{
                if(err){
                console.error('Error in fetching the meeting',err);
                res.status(500).json({error:'An error occured'});
            }else{
                res.status(200).json(result);
            }
            
            
            });
            });
             
          //delete meeting
    app.delete('/deletemeeting/:id',(req,res)=>{
        const id=req.params.id;
        const sql='delete from meeting where m_id=?';
        db.query(sql,[id],(err,result)=>{
            if(err){
            console.error('Error in deleting the meeting',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:' Meeting deleted successfully'});
        }
       
        });
        });

        //update meeting
        app.put('/updateMeeting',(req,res)=>{
            const {m_id,f_name,l_name,email,address,date,city,time}=req.body;
            const sql='update product set f_name=?,l_name=?,email=?,address=?,date=?,city=?,time=? where id=?';
            db.query(sql,[f_name,l_name,email,address,date,city,time],(err,result)=>{
                if(err){
                    console.error('Error in updating the meeting',err);
                    res.status(500).json({error:'An error occured'});
                }else{
                    res.status(200).json({message:'Meeting updated successfully'});
                }
        
        
            });
            });

        // get meeting by id
        app.get('/getMeeting/:id',(req,res)=>{
            const id=req.params.id;
            const sql='select * from meeting where m_id=?';
            db.query(sql,[id],(err,result)=>{
                if(err){
                console.error('Error in fetching the meeting',err);
                res.status(500).json({error:'An error occured'});
            }else{
                res.status(200).json(result);
            }
           
            });
            });
        
        