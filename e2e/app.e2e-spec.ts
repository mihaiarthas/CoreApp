import { CoreAppPage } from './app.po';

describe('core-app App', function() {
  let page: CoreAppPage;

  beforeEach(() => {
    page = new CoreAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
