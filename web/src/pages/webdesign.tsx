import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { designLayoutSelector } from '@/store/selector';
import classnames from 'classnames';
import DesignHeader from '@/components/designHeader';
export default function WebDesign(): React.FunctionComponentElement<HTMLDivElement> {
    const layout = useRecoilValue(designLayoutSelector);
    return (
        <div className="design-layout">
            <div className="design-layout-header">
                <DesignHeader />
            </div>
            <div className={classnames(['design-layout-content', { 'toggle-left': layout.toggleLeft, 'toggle-right': layout.toggleRight }])}>
                <div className="design-layout-menu">
                    <div className="design-layout-wrap"></div>
                </div>
                <div className="design-layout-panel">
                    <div className="design-layout-phead"></div>
                    <div className="design-layout-pbody"></div>
                    <div className="design-layout-pfoot"></div>
                </div>
                <div className="design-layout-setting">
                    <div className="design-layout-wrap"></div>
                </div>
            </div>
        </div>
    );
}