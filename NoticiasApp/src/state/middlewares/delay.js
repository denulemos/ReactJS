export const delay = store => next => action => {
    if(action.delay) {
        setTimeout(() => {
            next(action);
        }, action.delay)
    }
    else {
        next(action);
    }
}