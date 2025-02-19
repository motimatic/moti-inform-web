import JourneyConfirmationPage from "./journey-confirmation-page/JourneyConfirmationPage.tsx";
import IdentifyChallengesPage from "./identify-challenges-page/IdentifyChallengesPage.tsx";
import LinksSummaryPage from "./links-summary-page/LinksSummaryPage.tsx";


export class PageFactory {

    private static pageList = {
        "Journey Confirmation": JourneyConfirmationPage,
        "Identify Challenges": IdentifyChallengesPage,
        "Links Summary": LinksSummaryPage
    }

    static create(page): React.FC {
        return this.pageList[page.name] || JourneyConfirmationPage;
    }

}
