import * as React from 'react';
import { useRecoilState } from 'recoil';
import { designToolMenus, designLayout } from '@/store';
import { toggleIcon } from '@/store/action';
import { fullScreen, exitFullScreen } from '@/core/util';
import IconMenu from './iconMenu';

const { useMemo } = React;

export default function DesignHeader(): React.ReactElement {
    const [ menus, setMenus ] = useRecoilState(designToolMenus);
    const [ layout, setLayout ] = useRecoilState(designLayout);
    const leftMenus: Array<any> = useMemo(() => {
        return menus.left;
    }, [ menus ]);
    const rightMenus: Array<any> = useMemo(() => {
        return menus.right;
    }, [ menus ]);
    const handleAction = (item: any) => {
        switch(item.action) {
            case 'toggleLeft':
                setMenus(toggleIcon(menus, item.action));
                setLayout({
                    ...layout,
                    toggleLeft: !layout.toggleLeft,
                });
                break;
            case 'toggleRight':
                setMenus(toggleIcon(menus, item.action));
                setLayout({
                    ...layout,
                    toggleRight: !layout.toggleRight,
                });                
                break;
            case 'screen':
                setMenus(toggleIcon(menus, item.action));
                if(document.fullscreenElement) {
                    exitFullScreen();
                }else{
                    fullScreen();
                }
                break;
        }
    }   
    return (
        <div className="design-header">
            <div className="left">
                <div className="menu">
                    {
                        leftMenus.map((it) => (
                            <IconMenu onClick={handleAction} key={it.action} {...it} />
                        ))
                    }                   
                </div>
                <div className="title">新项目</div>
            </div>
            <div className="center">

            </div>
            <div className="right">             
                {
                    rightMenus.map((it) => (
                        <IconMenu onClick={handleAction} key={it.action} {...it} />
                    ))
                }                
            </div>
        </div>
    );
}