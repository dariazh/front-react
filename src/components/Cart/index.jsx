import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CartItem from '../../components/CartItem';


class Cart extends PureComponent {
    calcSubtotal = () => {
        if (this.props.itemsList.length === 0) {
            return <h5 className='subtotal'>Cart is empty</h5>
        } else {
            let result = this.props.itemsList.reduce(function (sum, current) {
                return sum + current.price;
            }, 0);
            return <h5 className='subtotal'>Subtotal price: ${result}</h5>
        }
    };

    render() {
        return (
            <div className='cart-wrapper'>
                <div className="p-3 bg-dark my-2 rounded">
                    <h5>Checked items</h5>
                    <div className="cart-list">
                        {this.props.itemsList.map((item, index) =>
                            <CartItem key={'pr-item' + index} item={item}/>
                        )}
                        {this.calcSubtotal()}
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(store => ({
    itemsList: store.cart.items
}))(Cart);