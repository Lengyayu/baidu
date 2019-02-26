/**
 * Created by Administrator on 2019/2/25 0025.
 */
const puppeteer = require('puppeteer');

const openSearchRuselt = async (url,targetId) => {

    // 启动浏览器
    const browser = await puppeteer.launch({
        headless: false,
        executablePath:'C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
    });
    // 打开页面
    const page = await browser.newPage();
    // 设置浏览器视窗
    page.setViewport({
        width: 1376,
       height: 1200,
    });
    // 地址栏输入网页地址
    await page.goto(url);
/*     截图: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagescreenshotoptions
    await page.screenshot({ path });

    await page.click('#kw');

    await page.focus('#kw');
    // 输入搜索关键字
    await page.type('#kw','辣子鸡', {
        delay: 1000, // 控制 keypress 也就是每个字母输入的间隔
    });

    page.click('#su');*/

    /*await page.waitFor(5000);

    const [response] = await Promise.all([
        page.waitForNavigation(),
        page.click('#'+targetId),
    ]);*/

    //page.click('#'+targetId);

    // 关闭浏览器
    //await browser.close();
};

module.exports = openSearchRuselt;


