import { proxy } from 'valtio';
import { QuickLinks } from '../shared/models/quickLink.model.ts';

export const quickLinksStore = proxy({
    data: [] as QuickLinks[],
    setData: (value: QuickLinks[]) => {
        quickLinksStore.data = value;
    },

});
