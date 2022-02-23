
var userModel = require('../models/User');

module.exports={
    index: function(req,res){
    
        userModel.index(function(data){
        res.render('crud-table', {fetchData:data}); 
        });
    },

    create: function(request, response){
        response.render('crud-form');
    },

    store:function(req, res){
        const inputData={ 
            full_name: req.body.full_name,
            email_address: req.body.email_address,
            city: req.body.city,
            country: req.body.country,
        };

        userModel.store(inputData,function(data){
            res.redirect('/users/index');
            console.log(data.affectedRows + 'record created');
        });
    },

    edit:function(req,res){
        const editId=req.params.id;
        
        userModel.edit(editId,function(data){
            res.render('crud-form',{editData:data});
            console.log(data.affectedRows + 'record fetched');
        });
    },

    update: function(req,res){
        const inputData = {
            full_name: req.body.full_name,
            email_address: req.body.email_address,
            city: req.body.city,
            country: req.body.country,
        };

        const updateId=req.params.id;
        userModel.update(inputData,updateId,function(data){
            res.redirect('/users/index');
            console.log(data.affectedRows +'record(s) updated');
        });
    },

    delete:function(req,res){
        const deleteId=req.params.id;
        userModel.delete(deleteId,function(data){
            res.redirect('/users/index');
            console.log(data.affectedRows + 'record deleted');
        });
    }
}