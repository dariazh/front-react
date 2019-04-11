import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';

export default class ProductItem extends Component {
    render() {
        const { id, image, name, description, size, price } = this.props.product;

        return (
            <Col xs="6">
                <Link to={{pathname: '/products/' + id}} className="product-item">
                    <Card style={{height: 400 + 'px'}}>
                        <CardImg top style={{
                            maxHeight: 200 + 'px',
                            maxWidth: 200 + 'px',
                            width: "auto",
                            height: "auto",
                            margin: 0 + ' auto'
                        }} src={image} alt={name}/>
                        <CardBody>
                            <CardTitle tag="h4">{name}</CardTitle>
                            <CardText>{description}</CardText>
                            <CardSubtitle className='mb-2'>Size: {size.map((val,i)=>{
                                return val + ' | ';
                            })}</CardSubtitle>
                            <CardSubtitle>Price:
                                <small>$</small>
                                <b>{price}</b></CardSubtitle>
                        </CardBody>
                    </Card>
                </Link>
            </Col>);
    }
}