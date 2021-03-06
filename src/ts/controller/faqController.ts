import { template, translations, views, state } from "..";

/**
 * FAQ controller
 */

// tslint:disable-next-line: class-name
export class faqController {

    public static index() {
        template.setNavTitle( translations.text("kaiChronicles"), "#mainMenu", true);
        views.loadView("faq_" + state.language + ".html");
    }

    /** Return page */
    public static getBackController() { return "mainMenu"; }

}
