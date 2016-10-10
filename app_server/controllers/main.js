//Get Home Page
module.exports.index = function(req, res){
  res.render('index', { title: 'Speech' });
}

module.exports.getty = function(req, res){
  res.render('gettys', { title: 'Speech'});
}

module.exports.dream = function(req,res){
  res.render('dream', { title: 'Speech'});
}

module.exports.military = function(req, res){
  res.render('military', {title: 'Speech'});
}