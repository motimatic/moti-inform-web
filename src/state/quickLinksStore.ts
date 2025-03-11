import { proxy } from 'valtio';
import { QuickLink } from '../shared/models/quickLink.model.ts';

export const quickLinksStore = proxy({
    data: [] as QuickLink[],
    setData: (value: QuickLink[]) => {
        quickLinksStore.data = value;
    },

});
