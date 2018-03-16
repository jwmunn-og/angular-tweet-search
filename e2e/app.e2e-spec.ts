import { TweetsearchPage } from './app.po';

describe('tweetsearch App', () => {
  let page: TweetsearchPage;

  beforeEach(() => {
    page = new TweetsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
