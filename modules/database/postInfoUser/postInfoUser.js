var MongoClient = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017',
    getFbInfo = require('../../api/facebookAPI/getFbInfo');

var postInfoUser = async (senderId) => {
    var res = await (getFbInfo.getFbInfo(senderId));
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let collect = db.db('cspheartsync').collection('users');
        collect.insert(res);
    })
}
module.exports = { postInfoUser: postInfoUser }