/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月29日
 */
const fs = require('fs');
const join = require('path').join;

// 开始处理 读取txt
const readTXT = (path, callback) => fs.readdir(path, (err, list) => {
        if (list.toString() === '') {
            console.log('未找到.txt文件');
            return false;
        }
        fs.readFile(join(path, list[0]), 'utf-8', (err, txt) => {
            if (err) throw err;
            let txtArr = txt.split('&');
            callback(txtArr);
        })
    }
);

module.exports = readTXT;
