/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月22日
 */

const gm = require('gm');
const join = require('path').join;

const deal = {
    fontPath: join(__dirname, `../../../static/font/SOURCEHANSANSCN-MEDIUM_0.OTF`),
    backPath: join(__dirname, `../../../static/background/verticalTitle.png`),
    single: (ptah, id, title, callback) => {
        let resSrc = join(ptah, `${parseInt(id)}.png`);
        gm(deal.backPath)
            .fill('#ffffff')
            .font(deal.fontPath)
            .fontSize(20)
            .drawText(33, 90, `${title}`)
            .quality(100)
            .write(resSrc, (e) => {
                // 输出的图片路径
                if (e) {
                    console.log(e.message);
                } else {
                    callback()
                }
            })
    },
    double: (ptah, id, one, two, callback) => {
        let resSrc = join(ptah, `${parseInt(id)}.png`);
        gm(deal.backPath)
            .fill('#ffffff')
            .font(deal.fontPath)
            .fontSize(20)
            .drawText(45, 90, `${one}`)
            .drawText(20, 90, `${two}`)
            .quality(100)
            .write(resSrc, (e) => {
                if (e) {
                    console.log(e.message);
                } else {
                    callback()
                }
            })
    }
};

module.exports = deal;
