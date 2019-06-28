/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月29日
 */

const readTXT = require('./readTXT');
const verticaltitles = require('../verticaltitles');
const rename = require('./rename');
const cover = require('../cover');

// 开始处理
const readRun = (path, id) => {
    // 是否全量
    let amount = true;
    let segmentation = [];
    if (parseInt(id) !== 0) {
        segmentation = id.split(',');
        amount = false;
    }

    // 读取txt
    readTXT(path.txt, data => {
        // 生成竖标题和封面图
        let list = data.map(item => new Promise(resolve => {
            let arr = item.split('|');
            let id = arr[0];
            let title = arr[2];
            
            if (amount || (!amount && segmentation.indexOf(id) !== -1)) {
                if (path.summary_audio_ftp) {
                    rename(path.summary_audio_ftp, parseInt(id), title)
                }

                let verticalFun = new Promise(success => verticaltitles(path.verticaltitles, id, title,
                    () => {
                        success();
                    }
                ));

                let coverFun = new Promise(success => cover(path.covers, path.portrait, item,
                    () => {
                        success();
                    }
                ));

                Promise.all([verticalFun, coverFun]).then(() => {
                    resolve();
                });

            } else {
                resolve();
            }

        }));

        Promise.all(list).then(() => {
            console.log('--- 结束 ---');
        });
    })
};

module.exports = readRun;
