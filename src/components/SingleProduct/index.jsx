import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {addItemToCart} from "../../actions/cartAdd";
import {Button, Row, Col, Card, CardImg, CardFooter, CardTitle, CardText, CardSubtitle} from 'reactstrap';

class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.add.bind(this);
    }

    add = () => {
        const {id} = this.props.match.params;
        const singleProduct = this.props.product[id];

        this.props.addItem({
            id: id,
            name: singleProduct.name,
            image: singleProduct.image,
            description: singleProduct.description,
            price: singleProduct.price,
        });
    };

    render() {
        const {id} = this.props.match.params;
        const singleProduct = this.props.product[id];

        return (
            <Row>
                <Col>
                    <Card>
                        <CardImg top style={{
                            maxHeight: 150 + 'px',
                            maxWidth: 150 + 'px',
                            width: "auto",
                            height: "auto",
                            margin: 0 + ' auto'
                        }}
                                 className='pt-1 pb-1'
                                 src={singleProduct.image} alt={singleProduct.name}/>
                        <CardFooter>
                            <CardTitle tag="h4">{singleProduct.name}</CardTitle>
                            <CardText>{singleProduct.description}</CardText>
                            <CardSubtitle>
                                <small>$</small>
                                <b>{singleProduct.price}</b></CardSubtitle>
                            <Button className='mt-2' onClick={this.add}>Add to
                                cart</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default connect(store => ({
    items: store.cart.items
}), dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
}))(withRouter(SingleProduct));