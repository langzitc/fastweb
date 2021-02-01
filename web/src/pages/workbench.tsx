import * as React from 'react';
import { Input } from 'antd';
import classnames from 'classnames';
import { useRecoilValue, useRecoilState } from 'recoil';
import { workbenchMenus } from '@/store';
import { workbenchDrawerMenuSelector } from '@/store/selector';
import { ProjectList } from '@/components/projectList';

const { useState, useEffect, useCallback, useRef } = React;

export default function Workbence(): React.ReactElement {
    const [ showCreateMenu, setShowCreateMenu ] = useState(false);
    const menuRef: any = useRef();
    const [ menus, setMenus ] = useRecoilState(workbenchMenus);
    const drawerMenus = useRecoilValue(workbenchDrawerMenuSelector);
    const handleMenuClick = useCallback((e: React.MouseEvent, menu) => {
        e.stopPropagation();
        if(menu.key === 'create') {
            setShowCreateMenu(!showCreateMenu);
        }else{
            const newMenus: Array<any> = JSON.parse(JSON.stringify(menus)).map((it: any) => {
                if(!it.isPopup) {
                    it.activated = it.key === menu.key;
                }
                return it;
            });
            setMenus(newMenus);
        }
    }, [ showCreateMenu, menus, setMenus ]);
    const handleClick = useCallback((e) => {
        if(menuRef.current && !menuRef.current.contains(e.target)) {
            setShowCreateMenu(false);
        }
    }, []);
    useEffect(() => {
        document.body.addEventListener('click', handleClick);
        return () => {
            document.body.removeEventListener('click', handleClick);
        }
    }, [ handleClick ]);
    return (
        <div className={classnames({ 'layout-workbench': true, 'toggle': !!drawerMenus.length })}>
            <div className="lw-left">
                <div className="logo">FW</div>
                <div className="lw-menu">
                    {
                        menus.map((menu: any) => (
                            <div
                                key={menu.key}
                                className={classnames({ 'lw-menu-item': true, 'primary': menu.isPrimary, active: menu.activated })}
                                onClick={(e) => handleMenuClick(e, menu)}
                            >
                                <div className="lmi-icon"><i className={classnames({ 'iconfont': true, [menu.icon]: true })}></i></div>
                                <div className="lmi-text">{ menu.label }</div>
                                {
                                    menu.isPopup ? (
                                        <div ref={menuRef} className={classnames({ 'lmi-popmenu': true, 'show': showCreateMenu })}>
                                            {
                                                menu.children.map((menu: any) => (
                                                    <div className="lmi-popmenu-item" key={menu.key}>
                                                        <div className="lpi-icon">
                                                            <i className={classnames({ 'iconfont': true, [menu.icon]: true })}></i>
                                                        </div>
                                                        <div className="lpi-text">{menu.label}</div>
                                                    </div>
                                                ))
                                            }                           
                                        </div>                                        
                                    ) : null
                                }
                            </div>                        
                        ))
                    }                  
                </div>
            </div>
            <div className={classnames({ 'lw-drawer': true, 'show': drawerMenus.length })}>
                <div className="lw-drawer-wrap">
                    <div className="lw-search">
                        <Input placeholder="搜索" />
                    </div>
                    <div className="lw-cmenu">
                        {
                            drawerMenus.map((menu: any) => (
                                <div className="lw-cmenu-item" key={menu.key}>
                                    <div className="lci-icon">
                                        <i className={classnames({ 'iconfont': true, [menu.icon]: true })}></i>
                                    </div>
                                    <div className="lci-text">{ menu.label }</div>
                                </div>
                            ))
                        }                                      
                    </div>                    
                </div>
            </div>
            <div className="lw-body">
                <div className="lwb-tool"></div>
                <div className="lwb-content">
                    <ProjectList />
                </div>
            </div>
        </div>
    );
}