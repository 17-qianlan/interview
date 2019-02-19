const mongo = require('mongoose');

const db = mongo.createConnection('mongodb://localhost:27017/QQMusic',{
    useNewUrlParser: true
});

mongo.Promise = global.Promise;

const Schema = mongo.Schema;

db.on('err', () => {
    console.log('连接失败');
});

db.on('open', () => {
    console.log('连接成功');
});

module.exports = {
    db,
    Schema
};
