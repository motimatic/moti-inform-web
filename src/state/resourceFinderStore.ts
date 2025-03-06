import { proxy } from 'valtio';
import { JourneyContext } from '../shared/models/journeyContext.model';
import { ResourceSelected } from '../shared/models/resourceSelected';

export const resourceFinderStore = proxy({
    context: new JourneyContext(),
    buttonClicked: false,
    resourceSelected: [] as ResourceSelected[],
    triggerAction: () => {
        resourceFinderStore.buttonClicked = !resourceFinderStore.buttonClicked;
    },

    setContext: (newContext: JourneyContext) => {
        resourceFinderStore.context = newContext; // Reassign new context instance
    },
    selectResource: (journeyName: string, value: string, label: string) => {
        const resourceIndex = resourceFinderStore.resourceSelected.findIndex((el: any) => el.journeyName == journeyName);
        if(resourceIndex != -1){
            resourceFinderStore.resourceSelected[resourceIndex].value = value;
            resourceFinderStore.resourceSelected[resourceIndex].label = label;
        }else
            resourceFinderStore.resourceSelected.push({journeyName, value, label});
    }
    

});
