/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2019年05月29日
 */
const gm = require('gm');
const join = require('path').join;

const synthetic = (cover, portrait, id, title, name, dept, hospital, position, callback) => {
    // 封面图大小
    const coverWidth = 800;
    const coverHeight = 450;
    // 标题文字大小
    let titleFontSize = 50;
    // 标题 x轴 左偏移量50
    const titleX = coverWidth / 2 - 50;
    // 标题 y轴 上固定 四分之一位
    let titleY = coverHeight * 0.35;
    const nameFontSize = 22;
    // 输入框宽度
    const inputWidth = 305;
    const inputOffset = 85;
    const inputAllWidth = inputWidth + inputOffset * 2;
    const nameX = (coverWidth - inputAllWidth) / 2;
    // 名称 Y轴 居中 下偏移量54
    const nameY = 64 - (nameFontSize / 2);
    const deptFontSize = 18;
    // 标题处理 是否需要换行
    let titleLen = title.length;

    if (titleLen <= 8) {
        titleY = coverHeight * 0.35;
    } else if (titleLen <= 20) {
        titleFontSize = 42;
        titleY = coverHeight * 0.3;
        title = `${title.slice(0, 10)}\n${title.slice(10)}`;
    } else if (titleLen <= 30) {
        titleFontSize = 42;
        titleY = coverHeight * 0.2;
        title = `${title.slice(0, 10)}\n${title.slice(10, 20)}\n${title.slice(20)}`;
    } else {
        console.log(`--- 封面图:${title}大于三十个字 请手动处理 ---`);
        titleFontSize = 42;
        titleY = coverHeight * 0.2;
        title = `${title.slice(0, 10)}\n${title.slice(10, 20)}\n${title.slice(20)}`;
    }

    let photo = `${join(portrait, 'photo.png')}`;

    // 获取人像图片的宽高
    gm(photo).size((err, value) => {
        if (err) {
            console.log('未找到医生抠图文件');
            callback()
        } else {
            let headerHeight = parseInt(value.height * 400 / value.width);
            let headerWidth = 400;
            let left = 10;
            if (headerHeight >= 400) {
                headerWidth = parseInt(400 * (400 / headerHeight));
                headerHeight = 400;
                left = 50;
            }
            let backPath = join(__dirname, `../../../static/background/background.jpg`);
            let footPathTitle = join(__dirname, `../../../static/font/SOURCEHANSANSCN-BOLD.OTF`);
            let footPathName = join(__dirname, `../../../static/font/SOURCEHANSANSCN-MEDIUM_0.OTF`);
            let resSrc = join(cover, `${parseInt(id)}.jpg`);
            gm(backPath)
                .font(footPathTitle)
                .fontSize(titleFontSize)
                .fill('#7e9fcd')
                .drawText(titleX, titleY, `${title}`)
                .font(footPathName)
                .fontSize(nameFontSize)
                .drawText(nameX, nameY, `${name} ${position}`, 'Center')
                .fontSize(deptFontSize)
                .drawText(nameX, nameY * 2, `${hospital} ${dept}`, 'Center')
                .draw(`image Over ${left}, ${450 - headerHeight}, ${headerWidth}, ${headerHeight} ${photo}`)
                .quality(60)
                .write(resSrc, (e) => {
                    // 输出的图片路径
                    if (e) {
                        console.log(e);
                    } else {
                        callback();
                    }
                })
        }
    })

};

module.exports = synthetic;
