import { proxy } from 'valtio';
import { JourneyContext } from '../shared/models/journeyContext.model';
import { ResourceSelected } from '../shared/models/resourceSelected';

export const resourceFinderStore = proxy({
    context: new JourneyContext(),
    buttonClicked: false,
    resourceSelected: [] as ResourceSelected[],
    isLoading: false,
    triggerAction: () => {
        resourceFinderStore.buttonClicked = !resourceFinderStore.buttonClicked;
    },
    setContext: (newContext: JourneyContext) => {
        resourceFinderStore.context = newContext; // Reassign new context instance
    },
    selectResource: (journeyName: string, value: string, label: string) => {
        const resourceIndex = resourceFinderStore.resourceSelected.findIndex((el: any) => (el.journeyName == journeyName && el.value == value ));
        if(resourceIndex != -1) {
            resourceFinderStore.resourceSelected.splice(resourceIndex,1);
        }else
            resourceFinderStore.resourceSelected.push({journeyName, value, label});
    },
    setIsLoading: (value : boolean) => {
        resourceFinderStore.isLoading = value;
    }
     

});
