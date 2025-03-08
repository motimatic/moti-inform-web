import JourneyConfirmationPage from "./journey-confirmation-page/JourneyConfirmationPage.tsx";
import IdentifyChallengesPage from "./identify-challenges-page/IdentifyChallengesPage.tsx";
import LinksSummaryPage from "./links-summary-page/LinksSummaryPage.tsx";
import { Page } from "../../../../shared/models/page.model.ts";

export class PageFactory {

    private static pageList : Record<string, React.FC> = {
        "Journey Confirmation": JourneyConfirmationPage,
        "Challenges Page": IdentifyChallengesPage,
        "Resource Links": LinksSummaryPage
    }

    static create(page: Page): React.FC {
        return this.pageList[page.name] || JourneyConfirmationPage;
    }

}
