import AppPAge from "../../pasv/_page/AppPAge";

class HomePage extends AppPAge {
  get header() {
    return $("<h1>");
  }
  get tryForFreeBtnList() {
    return $$('[title="Try for free"]');
  }
  get menuLinksList() {
    return $$('//button[@role="menuitem"]');
  }
get subMenuActive(){
  return $('.navigation__dropdown.-active');
}
get whyAsanaLink() {
    return $('#navigation__dropdown-toggle-why-asana');
}
  get subMenuDropDownLinksList() {
    return $$('//a[@role="menuitem"]');
  }
  get subMenuDropDownLink() {
    return $('//a[@role="menuitem"]')
  }
}
export default new HomePage();
