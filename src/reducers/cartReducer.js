import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    items: [],
    metadata: {}
});

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CART_ADD': {
            let buffer = [...state.items];
            buffer.push(action.item);
            return state.merge({
                items: buffer
            })
        }
        case 'CART_DELETE': {
            let buffer = [...state.items];
            let compareBuff = [];
            buffer.forEach(function (i, val) {
                if (i.id === action.item.id) {
                    compareBuff.push(i);
                }
            });
            buffer.splice(buffer.indexOf(compareBuff[0]), 1);
            return state.merge({
                items: buffer
            })
        }
        default:
            return state;
    }
}