import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
declare const ngApimock: any;

describe('Giphy App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
  });

  describe('default scenario', () => {
    it('should display 12 GIFs by default', async () => {
      const numberOfExpectedGIFs = 12;
      await ngApimock.selectScenario('giphyAPI', 'search');
      await page.navigateTo();
      expect(page.getGIFs()).toBe(numberOfExpectedGIFs);
    });
  });

  describe('user uses bad language', () => {
    it('should display a warning', async () => {
      await ngApimock.selectScenario('giphyAPI', 'search');
      await page.navigateTo();
      const searchField = page.getSearchField();
      await searchField.sendKeys('fuck');
      expect(page.getNotificationText()).toEqual('Oh my god! You can\'t say fuck');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
