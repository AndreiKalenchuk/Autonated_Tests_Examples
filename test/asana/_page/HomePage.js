import AppPAge from "../../../_page/AppPAge";

class HomePage extends AppPAge {
  get header() {
    return $("<h1>");
  }
  get tryForFreeBtnList() {
    return $$('[title="Try for free"]');
  }
  get menuLinksList() {
    return $$('//li[@class="horizontalNavigation__list-item"]');
  }
get subMenuActive(){
  return $('.navigation__dropdown.-active');
}
  get dropDownMenuLinksList() {
    return $$(".navigation__dropdown__item");
  }
}
export default new HomePage();
