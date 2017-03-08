import { NgdialogPage } from './app.po';

describe('ngdialog App', function() {
  let page: NgdialogPage;

  beforeEach(() => {
    page = new NgdialogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
