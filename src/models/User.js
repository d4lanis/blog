var db =require("../utils/db");
module.exports = {

  index:function(callback){
    var sql=`SELECT * FROM users`;
    db.query(sql,function(err,data,fields){
      if(err) throw err;
      return callback(data);
    });
  },
  
  store: function(inputData,callback){
    var sql = 'INSERT INTO users SET ?';
    db.query(sql,inputData, function(err,data){
      if(err) throw err;
        return callback(data);
    });
  },

  edit:function(editId, callback){
    var sql=`SELECT * FROM users WHERE id=${editId}`;
    db.query(sql, function(err, data){
      if(err) throw err;
      return callback(data[0]);
    });
  },

  update: function(inputData,updateId,callback){
    var sql = `UPDATE users SET ? WHERE id= ?`;
    db.query(sql, [inputData,updateId],function (err,data){
      if(err) throw err;
        return callback(data);
    });
  },

  delete:function(deletedId,callback){
    var sql= `DELETE FROM users WHERE id= ?`;
    db.query(sql,[deletedId], function(err,data){
      if(err) throw err;
        return callback(data);
    })
  }
}; 