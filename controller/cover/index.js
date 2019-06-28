/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月29日
 */

const synthetic = require('./deal')

const cover = (cover, portrait, item, callback) => {
    let arr = item.split('|');
    let id = arr[0];
    let title = arr[2];
    let name = arr[3];
    let dept = arr[4];
    let hospital = arr[5];
    let position = arr[8].split('&')[0];
    synthetic(cover, portrait, id, title, name, dept, hospital, position, () => {
        callback();
    })
};

module.exports = cover;
