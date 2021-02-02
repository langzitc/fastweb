import * as React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { designTabs, propertyTabs } from '@/store';
import { designLayoutSelector } from '@/store/selector';
import classnames from 'classnames';
import DesignHeader from '@/components/designHeader';
import MenuSearch from '@/components/menuSearch';
import MenuTabs from '@/components/menuTabs';

const { useCallback, useMemo } = React;

export default function WebDesign(): React.ReactElement {
    const layout = useRecoilValue(designLayoutSelector);
    const [ tabs, setTabs ] = useRecoilState(designTabs);
    const [ rtabs, setRtabs ] = useRecoilState(propertyTabs);
    const onChange = useCallback((activeKey: string) => {
        setTabs({
            ...tabs,
            activeKey
        });
    }, [ tabs, setTabs ]);
    const onRChange = useCallback((activeKey: string) => {
        setRtabs({
            ...rtabs,
            activeKey
        });
    }, [ rtabs, setRtabs ]);    
    const leftTabProps = useMemo(() => {
        return {
            data: tabs,
            onChange
        }
    }, [ tabs, onChange ]);
    const rightTabProps = useMemo(() => {
        return {
            data: rtabs,
            onChange: onRChange
        }
    }, [ rtabs, onRChange ]);    
    return (
        <div className="design-layout">
            <div className="design-layout-header">
                <DesignHeader />
            </div>
            <div className={classnames(['design-layout-content', { 'toggle-left': layout.toggleLeft, 'toggle-right': layout.toggleRight }])}>
                <div className="design-layout-menu">
                    <div className="design-layout-wrap">
                        <MenuSearch placeholder="搜索" />
                        <MenuTabs { ...leftTabProps } />
                    </div>
                </div>
                <div className="design-layout-panel">
                    <div className="design-layout-phead"></div>
                    <div className="design-layout-pbody"></div>
                    <div className="design-layout-pfoot"></div>
                </div>
                <div className="design-layout-setting">
                    <div className="design-layout-wrap">
                        <MenuTabs { ...rightTabProps } />
                    </div>
                </div>
            </div>
        </div>
    );
}