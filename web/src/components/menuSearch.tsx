import * as React from 'react';

type MenuSearchProps = {
    placeholder?: string,
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void,
};

export default function MenuSearch(props: MenuSearchProps): React.ReactElement {
    return (
        <div className="fw-menu-search">
            <div className="prefix">
                <i className="iconfont icon-search"></i>
            </div>
            <input className="fw-menu-search" {...props}  />
        </div>
    );
}