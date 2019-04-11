export function deleteItemFromCart(item) {
    return {
        type: 'CART_DELETE',
        item
    }
}