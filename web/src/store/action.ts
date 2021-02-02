
import { findTarget } from '@/core/util';
export function toggleIcon(data: any, action: string) {
    const d = JSON.parse(JSON.stringify(data));
    const target = findTarget(d, action);
    if(target && Array.isArray(target.icon)) {
        if(target.iconIndex === 0) {
            target.iconIndex = 1;
        }else{
            target.iconIndex = 0;
        }
    }
    return d;
}