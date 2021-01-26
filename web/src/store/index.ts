import { atom } from 'recoil';

export const showSettingPanel = atom({
    key: 'showSettingPanel',
    default: false,
});

export const leftMenus = atom({
    key: 'leftMenus',
    default: [{
        label: '视图',
        icon: '',
        action: 'view'
    },{
        label: '组件',
        icon: '',
        action: 'component'
    },{
        label: '模板',
        icon: '',
        action: 'template'
    },{
        label: '素材',
        icon: '',
        action: 'resource'
    }]
});

export const navMenus = atom({
    key: 'navMenus',
    default: [{
        label: '新建',
        icon: '',
        action: 'create'
    },{
        label: '操作',
        icon: '',
        action: 'operation'
    },{
        label: '预览',
        icon: '',
        action: 'preview'
    },{
        label: '保存',
        icon: '',
        action: 'save'
    },{
        label: '导出',
        icon: '',
        action: 'export'
    },{
        label: '设置',
        icon: '',
        action: 'settings'
    }]
});