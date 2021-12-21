//WebUI
//import { Builder, By } from "selenium-webdriver";
//                , Actions, Key, until
const { Builder, By } = require('selenium-webdriver');

//payGradeCurrency_currencyName
//payGradeCurrency_minSalary
//payGradeCurrency_maxSalary
async function WebUI()
{
    let driver = new Builder().forBrowser('chrome').build();
   
    try {
    await driver.get('https://opensource-demo.orangehrmlive.com/');
    await driver.findElement(By.id('txtUsername')).sendKeys('Admin');
    await driver.findElement(By.id('txtPassword')).sendKeys('admin123');
    await driver.findElement(By.id('btnLogin')).click();

    await driver.findElement(By.id('menu_admin_viewAdminModule')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('menu_admin_Job')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('menu_admin_viewPayGrades')).click();
    await driver.sleep(500);

    await driver.findElement(By.id('btnAdd')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('payGrade_name')).sendKeys('UAHName');
    await driver.sleep(500);
    await driver.findElement(By.id('btnAddCurrency')).click();
    await driver.sleep(500);

    await driver.findElement(By.id('payGradeCurrency_currencyName')).sendKeys('UAH - Ukraine Hryvnia');
    await driver.sleep(500);
    await driver.findElement(By.id('payGradeCurrency_minSalary')).sendKeys('1000');
    await driver.sleep(500);
    await driver.findElement(By.id('payGradeCurrency_maxSalary')).sendKeys('15000');
    await driver.sleep(500);
    await driver.findElement(By.id('btnSaveCurrency')).click();

    //await driver.findElement(By.id('menu_admin_viewAdminModule')).click();
    //await driver.sleep(500);
    await driver.findElement(By.id('menu_admin_Job')).click();
    await driver.sleep(500);
    await driver.findElement(By.id('menu_admin_viewPayGrades')).click();
    await driver.sleep(500);

    const element = await driver.findElement(By.xpath("//td[@class='left']/a[text()='UAHName']"));
    const row = await element.findElement(By.xpath('./..'));
    
    if ((await row.findElement(By.xpath('td[text()="UAH - Ukraine Hryvnia"]')).isDisplayed()).valueOf()) {
        await row.findElement(By.xpath('td[1]/input')).click();
    }
    
    else {
        throw new Error('There is no element in the list');
    }
    
    await driver.findElement(By.id('btnDelete')).click();
    await driver.sleep(100);
    await driver.findElement(By.id('dialogDeleteBtn')).click();
    
    try {
        await row.findElement(By.xpath('td[text()="UAH - Ukraine Hryvnia"]')).isDisplayed();
    } 
    catch (e) {
        console.log('Element deleted');
    }

    } 
    
    finally {
        await driver.sleep(1000);
        await driver.quit();
    }

}


WebUI();