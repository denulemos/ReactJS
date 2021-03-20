export const logger = store => next => action => {
    console.log("ACTION", action.type);
    next(action);
}