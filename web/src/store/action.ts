function findTarget(data: any, action: string): any {
    let target = null;
    if(Array.isArray(data)) {
        for(let i = 0; i < data.length; i ++) {
            if(data[i].action === action) {
                target = data[i];
            }else if(data[i].options) {
                target = findTarget(data[i].options, action);
            }
            if(target) {
                break;
            }
        }
    }else{
        for(let key in data) {
            target = findTarget(data[key], action);
            if(target) {
                break;
            }
        }
    }
    return target;
}

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