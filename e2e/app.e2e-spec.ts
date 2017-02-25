import { FlamingMarshmallowsWebPage } from './app.po';

describe('flaming-marshmallows-web App', function() {
  let page: FlamingMarshmallowsWebPage;

  beforeEach(() => {
    page = new FlamingMarshmallowsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
