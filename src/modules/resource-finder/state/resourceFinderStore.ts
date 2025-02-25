import { proxy } from 'valtio';
import {JourneyContext} from "../../../shared/models/journeyContext.model.ts";

export const resourceFinderStore = proxy({
    context: new JourneyContext(),
    buttonClicked: false,

    triggerAction: () => {
        resourceFinderStore.buttonClicked = !resourceFinderStore.buttonClicked;
    },

    setContext: (newContext: JourneyContext) => {
        resourceFinderStore.context = newContext; // Reassign new context instance
    },

});
