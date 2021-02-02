import * as React from 'react';
import { Tabs } from 'antd';
type TabProps = {
    onChange?: (key: string) => void,
    data: any,
};
const { TabPane } = Tabs;
export default function MenuTabs(props: TabProps): React.ReactElement {
    const { onChange, data } = props;
    return (
        <div className="fw-menu-tabs">
            <Tabs activeKey={data.activeKey} onChange={onChange}>
                {
                    data.options.map((it: any) => (
                        <TabPane key={it.key} tab={it.title}>
                            <div className="fw-tabpane-wrap"></div>
                        </TabPane>
                    ))
                }
            </Tabs>            
        </div>
    );
}