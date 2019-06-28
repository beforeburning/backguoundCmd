/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月30日
 */

const fs = require('fs');
const join = require('path').join;

const rename = (path, id, title) => {
    let oldPath = join(path, `${title}.m4a`);
    let newPath = join(path, `${id}.m4a`);
    fs.exists(oldPath, exists => {
        if (exists) {
            fs.rename(oldPath, newPath, err => {
                if (err) throw err;
            })
        }
    });
};

module.exports = rename;
