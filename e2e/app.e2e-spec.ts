import { element, by, browser } from 'protractor';
import { A001Page } from './app.po';

describe('a001 App', () => {
  let page: A001Page;

  beforeEach(() => {
    page = new A001Page();
  });

  it('should display message saying Cart Items', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Cart Items');
  });

  it('should have title Cart Items', () => {
    browser.get('/');
    let title = element(by.tagName('h1')).getText();
    expect(title).toEqual('Cart Items')
  })
});
