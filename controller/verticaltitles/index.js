/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月29日
 */

const deal = require('./deal');

const verticaltitles = (ptah, id, texts, callback) => {
    let title = ``;
    let len = texts.length;
    if (len <= 12) {
        for (let i = 0; i < texts.length; i++) {
            title += `${texts[i]}\n`;
        }
        deal.single(ptah, id, title, () => {
            callback();
        })
    } else {
        let middle = parseInt(len / 2);
        let oneText = texts.substr(0, middle);
        let one = ``;
        for (let i = 0; i < oneText.length; i++) {
            one += `${oneText[i]}\n`;
        }
        let twoText = texts.substr(middle, len);
        let two = ``;
        for (let i = 0; i < twoText.length; i++) {
            two += `${twoText[i]}\n`;
        }
        deal.double(ptah, id, one, two, () => {
            callback();
        });
    }

};

module.exports = verticaltitles;
