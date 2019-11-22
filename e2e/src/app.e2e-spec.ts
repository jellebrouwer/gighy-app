import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
declare const ngApimock: any;

describe('Giphy App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
  });

  it('should display GIFs by default', async () => {
    const numberOfExpectedGIFs = 4;
    await ngApimock.selectScenario('giphyAPI', 'search');
    await page.navigateTo();
    expect(page.getGIFs()).toBe(numberOfExpectedGIFs);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
