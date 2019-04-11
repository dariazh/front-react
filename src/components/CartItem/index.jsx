import React, {PureComponent} from 'react';
import {deleteItemFromCart} from "../../actions/cartDelete";
import {connect} from "react-redux";
import {Toast, ToastBody, ToastHeader} from 'reactstrap';


class CartItem extends PureComponent {
    remove = (e) => {
        e.stopPropagation();
        const {item} = this.props;

        this.props.deleteItem({
            id: item.id,
            name: item.name,
            image: item.image,
            description: item.description,
            price: item.price,
        });
    };

    render() {
        const {item} = this.props;
        return (
            <div className="cart-item">
                <Toast>
                    <ToastHeader>
                        <span onClick={this.remove}>X</span>
                    </ToastHeader>
                    <ToastBody>
                        <div className="cart-item-thumb">
                            <img src={item.image} alt={item.name}/>
                        </div>
                        <div className="cart-item-details">
                            <p className="title">{item.name}</p>
                            <p className="desc">{item.description}</p>
                        </div>
                        <div className="cart-item-price"><p>$ {item.price}</p></div>
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

export default connect(store => ({
    items: store.cart.items
}), dispatch => ({
    deleteItem: item => dispatch(deleteItemFromCart(item))
}))(CartItem);