export function findTarget(data: any, action: string): any {
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

export function fullScreen(element: any = document.documentElement) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }    
}

export function exitFullScreen() {
    const element: any = document;
    if (element.exitFullscreen) {
        element.exitFullscreen();
    } else if (element.msExitFullscreen) {
        element.msExitFullscreen();
    } else if (element.mozCancelFullScreen) {
        element.mozCancelFullScreen();
    } else if (element.webkitExitFullscreen) {
        element.webkitExitFullscreen();
    }    
}