/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月29日
 */
const fsFun = require('./fsFun');

const start = (path, id) => {
    if (!path) {
        console.log('缺少参数: -p 任务路径');
        return false;
    }
    if (!id) {
        console.log('缺少参数: -i 指定任务 默认值0');
        return false;
    }
    fsFun(path, id);
};

module.exports = start;
