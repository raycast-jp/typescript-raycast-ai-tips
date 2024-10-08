// src/getChromeUrl.ts
import { exec } from 'child_process';
import { chromium } from 'playwright';
import OpenAI from 'openai';

export function getChromeUrl(): Promise<string> {
    return new Promise((resolve, reject) => {
        const script = `
            tell application "Google Chrome"
                set currentTab to active tab of front window
                set currentURL to URL of currentTab
                return currentURL
            end tell
        `;
        
        exec(`osascript -e '${script}'`, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`Stderr: ${stderr}`);
                return;
            }
            resolve(stdout.trim());
        });
    });
}

export async function fethInformationFromUrl(url: string): Promise<string> {
    await getChromeUrl();
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);
    // ページのタイトルを取得
    const title = await page.title();
    console.log(`Page Title: ${title}`);
    // ページの本文を取得
    const bodyText = await page.evaluate(() => document.body.innerText);
    await browser.close();
    return bodyText;
    
}

export const summarizer = (apiKey: string) => {
    const client = new OpenAI({
        apiKey: apiKey, 
      });
    return async (message: string) => {
        console.log(`start summarizing...`);
        const completion = await client.chat.completions.create({
	            model: "gpt-4o", 
	            messages: [{ "role": "user", "content": 
                    `以下のテキストを日本語でかつmarkdown形式で簡潔に要約してください:\n\n${message}` }],
        });
        return completion.choices[0].message.content;
    }
  }
  