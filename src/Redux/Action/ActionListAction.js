export const ADD_LISTACTION = 'ADD_LISTACTION'

export function AddListAction(ListAction: []) {
    return {type: ADD_LISTACTION, ListAction};
}
