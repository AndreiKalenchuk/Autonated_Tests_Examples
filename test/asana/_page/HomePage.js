import AppPAge from "../../pasv/_page/AppPAge";

class HomePage extends AppPAge {
    open(path) {
        super.open(path);
    }

    get header() {
        return $('.heading');
    }

    get tryForFreeBtnList() {
        return $$('[title="Try for free"]');
    }

    get menuLinksList() {
        return $$('button[role="menuitem"]');
    }

    get subMenuActive() {
        return $(".navigation__dropdown.-active");
    }

    get whyAsanaBtnLink() {
        return $("#navigation__dropdown-toggle-why-asana");
    }

    get solutionsBtnLink() {
        return $("#navigation__dropdown-toggle-solutions");
    }

    get resourcesBtnLink() {
        return $("#navigation__dropdown-toggle-resources");
    }

    get subMenuDropDownLinksList() {
        return $$('a[role="menuitem"]');
    }
}

export default new HomePage();
