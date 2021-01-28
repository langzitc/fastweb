import * as React from 'react';

export function ProjectItem(): React.FunctionComponentElement<HTMLDivElement> {
    return (
        <div className="co-project-item">
            <div className="co-cpi-icon">
                <i className="iconfont icon-work-filling"></i>
            </div>
            <div className="co-cpi-text">项目名称</div>
        </div>
    );
}