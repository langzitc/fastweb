import { atom } from 'recoil';
import {
    WORKBENCH_MENUS,
    DESIGN_TOOL_MENUS,
    DESIGN_LAYOUT,
} from './constant';

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

export const designToolMenus = atom({
    key: DESIGN_TOOL_MENUS,
    default: {
        left: [{
            title: '收起左侧面板',
            icon: ['icon-toggle-left', 'icon-toggle-right'],
            iconIndex: 0,
            disabled: false,
            action: 'toggleLeft',
            type: 'button',
        },{
            title: '首页',
            icon: 'icon-home',
            disabled: false,
            action: 'home',
            type: 'button',
        },{
            title: '首选项',
            icon: 'icon-modular',
            disabled: false,
            type: 'dropdown',
            action: 'modular',
            options: [{
                title: '退出',
                action: 'exit',
                icon: 'icon-close-bold'
            },{
                title: '首选项',
                action: 'preference',
                icon: 'icon-setting'
            },{
                title: '教程',
                action: 'teach',
                icon: 'icon-link'
            },{
                title: '官网',
                action: 'site',
                icon: 'icon-wangzhan'
            }]
        }],
        right: [{
            title: '下载',
            icon: 'icon-download',
            disabled: false,
            action: 'download',
            type: 'button',            
        },{
            title: '缩小',
            icon: 'icon-minus1',
            disabled: false,
            action: 'minus',
            type: 'button',
            color: 'green',          
        },{
            title: '100%',
            value: 100,
            action: 'no',
            type: 'text',            
        },{
            title: '放大',
            icon: 'icon-plus',
            disabled: false,
            action: 'plus',
            type: 'button',
            color: 'yellow',            
        },{
            title: '状态',
            icon: 'icon-zhuangtai',
            disabled: false,
            action: 'status',
            type: 'button',            
        },{
            title: '全屏',
            icon: ['icon-screenfull','icon-tuichuquanping'],
            iconIndex: 0,
            disabled: false,
            action: 'screen',
            type: 'button',            
        },{
            title: '收起右侧面板',
            icon: ['icon-toggle-right', 'icon-toggle-left'],
            iconIndex: 0,
            disabled: false,
            action: 'toggleRight',
            type: 'button',            
        }]
    }
});

export const designLayout = atom({
    key: DESIGN_LAYOUT,
    default: {
        toggleLeft: false,
        toggleRight: false,
    }
});