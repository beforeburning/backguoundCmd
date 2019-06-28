/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月29日
 */

const fs = require('fs');
const join = require('path').join;
const readRun = require('./readRun');

// 读取文件目录 获取绝对路径
const fsFun = (path, id) => {
    fs.readdir(path, (err, list) => {
        if (err) throw err;
        let pathSrc = {};
        list.forEach(item => pathSrc[item] = join(path, item));
        readRun(pathSrc, id);
    })
};

module.exports = fsFun;
