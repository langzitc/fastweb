import { selector } from 'recoil';
import {
    GET_WORKBENCH_DRAWER_MENUS,
    GET_WORKBENCH_MENUS,
    GET_DESIGN_LAYOUT,
    GET_DESIGN_TABS
} from './constant';
import {
    workbenchMenus,
    designLayout,
    designTabs,
} from '@/store';

export const workbenchDrawerMenuSelector = selector({
    key: GET_WORKBENCH_DRAWER_MENUS,
    get({ get }) {
        const menus: Array<any> = get(workbenchMenus);
        const target = menus.find(it => it.activated);
        return target ? (target.children || []) : [];
    }
});

export const workbenchMenuSelector = selector({
    key: GET_WORKBENCH_MENUS,
    get({ get }) {
        const menus: Array<any> = get(workbenchMenus);
        return menus;
    }
});

export const designLayoutSelector = selector({
    key: GET_DESIGN_LAYOUT,
    get({ get }) {
        return get(designLayout);
    }
});

export const designTabsSelector = selector({
    key: GET_DESIGN_TABS,
    get({ get }) {
        return get(designTabs);
    }
});
