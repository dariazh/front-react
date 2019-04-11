export function addItemToCart(item) {
    return {
        type: 'CART_ADD',
        item
    }
}