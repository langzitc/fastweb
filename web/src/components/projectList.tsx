import * as React from 'react';
import { ProjectItem } from '@/components/projectItem';

export function ProjectList(): React.ReactElement {
    return (
        <div className="co-project-list">
            <ProjectItem />
            <ProjectItem />
        </div>
    );
}