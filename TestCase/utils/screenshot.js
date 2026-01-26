import fs from 'fs';

function getTimeStamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

export async function takeScreenshot(page, testInfo, stepName = 'step') {
  const folderPath = 'screenshots';

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  const timeStamp = getTimeStamp();
  const safeTitle = testInfo.title.replace(/\s+/g, '_');

  const fileName = `${safeTitle}_${stepName}_${timeStamp}.png`;

  await page.screenshot({
    path: `${folderPath}/${fileName}`,
    fullPage: true,
  });

  console.log(`📸 Screenshot saved: ${folderPath}/${fileName}`);
}
