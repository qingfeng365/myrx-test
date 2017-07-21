import { MyrxTestPage } from './app.po';

describe('myrx-test App', () => {
  let page: MyrxTestPage;

  beforeEach(() => {
    page = new MyrxTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
