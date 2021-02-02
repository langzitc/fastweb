import * as React from 'react';
import '@/styles/admin.less';
import { Menu } from 'antd';
import { useRecoilValue } from 'recoil';
import { menusSelector } from '@/store/admin';
import classnames from 'classnames';

const Menus = (): React.ReactElement => {
    const menu = useRecoilValue(menusSelector);
    const { activeKey, menus } = menu;
    return (
        <Menu
          defaultSelectedKeys={activeKey}
          theme="dark"
        >
            {
                menus.map((item: any) => (
                    <Menu.Item key={item.value} icon={<i className={classnames(['iconfont', { [item.icon]: true }])} />}>
                        {item.label}
                    </Menu.Item>                    
                ))
            }
        </Menu>        
    );
}

export default function Admin(): React.ReactElement {
    return (
        <div className="page-admin">
            <div className="page-admin-header">

            </div>
            <div className="page-admin-body">
                <div className="page-admin-left">
                    <Menus></Menus>
                </div>
                <div className="page-admin-right"></div>
            </div>
        </div>
    );
}