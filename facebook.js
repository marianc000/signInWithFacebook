import puppeteer from 'puppeteer';
import { env } from 'process';
 
if (!env.FUSER || !env.FPASS) throw 'Set FUSER and FPASS environement variables';
 
const browser = await puppeteer.launch( );//

const page = await browser.newPage();

await page.goto('https://medium.com/m/connect/facebook?state=facebook-%7Chttps%3A%2F%2Fmedium.com%2F');
await page.waitForSelector('#email');
await page.evaluate(() => [...document.querySelectorAll('button[type="Submit"]')].at(-1).click());
await page.evaluate((val) => email.value = val, env.FUSER);
await page.evaluate((val) => pass.value = val, env.FPASS);
await page.evaluate(selector => document.querySelector(selector).click(), 'input[value="Log In"],#loginbutton');
console.log("clicked submit button");

await page.waitForFunction(() => location.href === 'https://medium.com/');
console.log("in medium");
 
//print user id
await page.waitForFunction(() => window?.branch?.g, { timeout: 100000 });
const myId = await page.evaluate(() => window?.branch?.g);
console.log("myId:", myId);