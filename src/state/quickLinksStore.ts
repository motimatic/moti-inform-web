import { proxy } from 'valtio';
import { QuickLinks } from '../shared/models/quiclLinks.model';

export const quickLinksStore = proxy({
    data: [] as QuickLinks[],
    setData: (value: QuickLinks[]) => {
        quickLinksStore.data = value;
    },

});
