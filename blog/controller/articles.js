module.exports.create = function(req,res){

};

module.exports.new = function(req,res){
    res.send("<form method='port' action='/articles'>\
                <input type='text' placeholder='name'/>\
            </form>");
};