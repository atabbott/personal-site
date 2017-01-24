import { SitetestPage } from './app.po';

describe('sitetest App', function() {
  let page: SitetestPage;

  beforeEach(() => {
    page = new SitetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
