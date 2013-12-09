
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Polymer Demo' });
};


exports.xfoo = function(req, res){
	res.render('xfoo');
};

exports.tkelementproto = function(req, res){
	res.render('tkelementproto');
};