import { browser, by, element } from 'protractor';

export class AppPage {

  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public getGIFs() {
    return element.all(by.css('.gif')).count() as Promise<number>;
  }

  public getSearchField() {
    return element(by.css('#search'));
  }

  public getNotificationText() {
    return element(by.css('.notification')).getText() as Promise<string>;
  }
}
