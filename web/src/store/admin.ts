import { atom, selector } from 'recoil';

export const ADMIN_MENUS = 'admin/menus';
export const ADMIN_MENUS_SELECTOR = 'admin/menus/selector';

export const menus = atom({
    key: ADMIN_MENUS,
    default: {
        activeKey: [''],
        menus: [{
            label: '主题管理',
            value: 'theme',
            url: '/amdin/theme',
            icon: 'icon-zhuti',
        },{
            label: '组件管理',
            value: 'component',
            url: '/amdin/component',
            icon: 'icon-zujian'
        },{
            label: '用户管理',
            value: 'user',
            url: '/amdin/user',
            icon: 'icon-yonghuguanli'
        },{
            label: '系统设置',
            value: 'settings',
            url: '/amdin/settings',
            icon: 'icon-xitongshezhi'
        }]        
    }
});

export const menusSelector = selector({
    key: ADMIN_MENUS_SELECTOR,
    get({ get }) {
        return get(menus);
    },
    set({ set }, newValue: any) {
        set(menus, newValue);
    }
});