import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getGIFs() {
    return element.all(by.css('.gif')).count() as Promise<number>;
  }
}
