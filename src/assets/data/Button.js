import jsonAppContent from '../data/appContent.json';

function getText(action) {
    return jsonAppContent.btn[action];
}


export {
    getText
}