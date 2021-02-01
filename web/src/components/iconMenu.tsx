import * as React from 'react';
import { Button, Menu, Dropdown } from 'antd';
import classnames from 'classnames';

type Children = {
    title: string,
    action?: string,
    icon?: string,
};

export type IconMenuProps = {
    title: string,
    icon: Array<string> | string,
    disabled?: boolean,
    action?: string,
    type: 'button' | 'text' | 'dropdown',
    iconIndex?: number,
    options?: Array<Children>,
    value?: any,
    color?: string,
    onClick?: Function,
}

const ButtonMenu = (props: IconMenuProps): React.ReactElement => {
    const comProps: any = {
        type: 'text',
        shape: 'circle',
        size: 'large',
        onClick: () => {
            props.onClick?.(props);
        }
    };
    let icon = '';
    if(typeof props.icon === 'string') {
        icon = props.icon;
    } else if(props.iconIndex !== undefined) {
        icon = props.icon[props.iconIndex];
    }
    comProps.icon = <i className={classnames([props.color, { iconfont: true, [icon]: true } ])} title={props.title}></i>
    return (
        <Button {...comProps}>{ props.type === 'text' ? props.title : '' }</Button>
    );
}

const DropdownMenu = (props: IconMenuProps): React.ReactElement => { 
    const list: any = props.options;
    return (
        <Dropdown
            overlayClassName="fw-dropdown"
            trigger={['click']}
            overlay={() => (
                <Menu>
                    {
                        list.map((it: any) => (
                            <Menu.Item icon={<i className={classnames(['iconfont', it.icon ])}></i>}  key={it.action}>{it.title}</Menu.Item>
                        ))
                    }
                </Menu>                
            )} 
            placement="bottomLeft"
        >
            <Button
                type="text"
                size="large"
                shape="circle"
                icon={<i className={classnames(['iconfont', props.icon ])}></i>}
            >
            </Button>
        </Dropdown>        
    );
}

export default function IconMenu(props: IconMenuProps): React.ReactElement {
    switch(props.type) {
        case 'dropdown':
            return <DropdownMenu {...props} />;
        default:
            return <ButtonMenu {...props} />;
    }
}