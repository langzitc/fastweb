import { selector } from 'recoil';
import { GET_WORKBENCH_DRAWER_MENUS, GET_WORKBENCH_MENUS } from './constant';
import { workbenchMenus } from '@/store';

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