import * as React from 'react';
import { Input } from 'antd';

export default function Workbence(): React.FunctionComponentElement<HTMLDivElement> {
    return (
        <div className="layout-workbench">
            <div className="lw-left">
                <div className="logo">FW</div>
                <div className="lw-menu">
                    <div className="lw-menu-item primary">
                        <div className="lmi-icon"><i className="iconfont icon-add-bold"></i></div>
                        <div className="lmi-text">新建</div>
                    </div>
                    <div className="lw-menu-item">
                        <div className="lmi-icon"><i className="iconfont icon-history"></i></div>
                        <div className="lmi-text">动态</div>
                    </div>                    
                    <div className="lw-menu-item">
                        <div className="lmi-icon"><i className="iconfont icon-project"></i></div>
                        <div className="lmi-text">项目</div>
                    </div>                    
                </div>
            </div>
            <div className="lw-drawer">
                <div className="lw-search">
                    <Input.Search />
                </div>
                <div className="lw-cmenu">
                    <div className="lw-cmenu-item">
                        <div className="lci-icon">
                            <i className="iconfont icon-project"></i>
                        </div>
                        <div className="lci-text">全部项目</div>
                    </div>
                    <div className="lw-cmenu-item">
                        <div className="lci-icon">
                            <i className="iconfont icon-favorite"></i>
                        </div>
                        <div className="lci-text">星标项目</div>
                    </div>
                    <div className="lw-cmenu-item">
                        <div className="lci-icon">
                            <i className="iconfont icon-ashbin"></i>
                        </div>
                        <div className="lci-text">回收站</div>
                    </div>                                        
                </div>
            </div>
            <div className="lw-body">

            </div>
        </div>
    );
}