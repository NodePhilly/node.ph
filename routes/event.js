/*
 * GET event resource.
 */
exports.events = function(req, res){
    res.send({ title: 'Express', date: '01-01-2014', description: 'NodePhilly' });
};