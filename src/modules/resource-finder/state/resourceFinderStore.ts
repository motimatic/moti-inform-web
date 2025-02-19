import { proxy } from 'valtio';

export const resourceFinderStore = proxy({
    buttonClicked: false,
    triggerAction: () => {
        resourceFinderStore.buttonClicked = !resourceFinderStore.buttonClicked;
    },
});
