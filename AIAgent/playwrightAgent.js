import { chromium } from "playwright";
import { decideAction } from "./llm.js";
import fs from "fs";

/*function takeScreenshot(page, step, action) {
  const ts = Date.now();
  const filename = `Screenshots/${AGENT_NAME}-step-${step}-${action.type}.png`;
  return page.screenshot({ path: filename, fullPage: true });
}*/

function buildScreenshotName({ agentName, step, actionType }) {
  const safeAction = actionType.replace(/_/g, " ");
  return `Screenshots/${agentName}-Step-${step}-${safeAction}.png`;
}

function takeScreenshot(page, { agentName, step, actionType }) {
  const filename = buildScreenshotName({
    agentName,
    step,
    actionType
  });

  return page.screenshot({
    path: filename,
    fullPage: true
  });
}

const AGENT_NAME = "LLMLogin";
const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

export async function runAgent() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  let state = {
    usernameFilled: false,
    passwordFilled: false
  };

  await page.goto("https://www.saucedemo.com");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForSelector('[data-test="username"]');

  for (let step = 0; step < 10; step++) {
    const content = await page.innerText("body");

    const action = await decideAction({
      pageContent: content,
      state
    });

    console.log("AI Action:", action);
	
	// 📸 Screenshot SEBELUM action
	await takeScreenshot(page, {
      agentName: AGENT_NAME,
      step,
      actionType: "before"
    });

    if (action.type === "fill_username") {
      await page.fill('[data-test="username"]', USERNAME);
      state.usernameFilled = true;
    }

    if (action.type === "fill_password") {
      await page.fill('[data-test="password"]', PASSWORD);
      state.passwordFilled = true;
    }

    if (action.type === "click_login") {
      await page.click('[data-test="login-button"]');
      await page.waitForTimeout(2000);
    }
	
	 // 📸 Screenshot SETELAH action
   await takeScreenshot(page, {
      agentName: AGENT_NAME,
      step,
      actionType: action.type
    });

    const isLoggedIn = await page.locator('text=Products').count() > 0;

	if (isLoggedIn) {
	console.log("✅ Products muncul, agent selesai");
	break;
}

  }

  await browser.close();
}
