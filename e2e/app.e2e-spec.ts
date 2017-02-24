import { Angular2guardsPage } from './app.po';

describe('angular2guards App', () => {
  let page: Angular2guardsPage;

  beforeEach(() => {
    page = new Angular2guardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
