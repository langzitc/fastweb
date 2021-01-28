import { atom } from 'recoil';
import { WORKBENCH_MENUS } from './constant';

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

export const workbenchMenus = atom({
    key: WORKBENCH_MENUS,
    default: [{
        label: '新建',
        icon: 'icon-add-bold',
        isPrimary: true,
        isPopup: true,
        key: 'create',
        children: [{
            label: '网站',
            icon: 'icon-wangzhan',
            key: 'website',
            url: ''
        },{
            label: 'Sass系统',
            icon: 'icon-spa',
            key: 'sass',
            url: ''
        },{
            label: 'H5',
            icon: 'icon-h5e',
            key: 'h5',
            url: ''
        },{
            label: '微信小程序',
            icon: 'icon-weixinxiaochengxu',
            key: 'wechat',
            url: ''
        },{
            label: '支付宝小程序',
            icon: 'icon-zhifubaoxiaochengxu',
            key: 'alipay',
            url: ''
        }]
    },{
        label: '动态',
        icon: 'icon-history',
        key: 'dyamic',
        activated: false,
        children: [{
            label: '最近修改',
            icon: 'icon-edit',
            key: 'historyedit'
        }]
    },{
        label: '项目',
        key: 'project',
        icon: 'icon-project',
        activated: false,
        children: [{
            label: '全部项目',
            icon: 'icon-project',
            key: 'allpro',
        },{
            label: '星标项目',
            icon: 'icon-favorite',
            key: 'starpro'
        },{
            label: '回收站',
            icon: 'icon-ashbin',
            key: 'cash'
        }]
    }]
});