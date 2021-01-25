import * as React from 'react';
import { Spin } from 'antd';

const { Suspense } = React;

export default function LazyLoad(TargetComponent: any) {
    return (props: any) => (
        <Suspense fallback={<Spin />}>
            <TargetComponent {...props}></TargetComponent>
        </Suspense>
    )
}