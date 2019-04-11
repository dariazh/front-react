import React, {Component} from 'react';
import ProductItem from '../../components/ProductItem';
import {Row, Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        };

    }

    get NumberOfPages() {
        const {product, itemsPerPage} = this.props;
        const numberOfPages = Math.ceil(product.length / itemsPerPage);
        return Array.from(Array(numberOfPages).keys());
    }

    paginatedLists() {
        const {currentPage} = this.state;
        const {product, itemsPerPage} = this.props;

        if (!Array.isArray(product)) new Error('Invalid supplied Lists.');
        return product.slice(
            (currentPage - 1) * parseInt(itemsPerPage, 0),
            (currentPage) * parseInt(itemsPerPage, 0)
        );
    }

    onClickPageNumber = (e, page) => {
        e.preventDefault();
        this.setState({currentPage: page});
    };

    render() {
        return (
            <>
                <Row>
                    {this.paginatedLists().map((item, index) =>
                        <ProductItem key={'pr-item' + index} product={item}/>
                    )}
                </Row>
                <Row>
                    <Pagination className='mx-auto mt-5'>
                        {this.NumberOfPages.map((pagenum) => (
                            <PaginationItem key={pagenum} active={
                                this.state.currentPage === pagenum + 1 ? true : false
                            }>
                                <PaginationLink href="javascript:void(0)"
                                                onClick={e => this.onClickPageNumber(e, pagenum + 1)}>{pagenum + 1}</PaginationLink>
                            </PaginationItem>))}
                    </Pagination>
                </Row>
            </>
        );
    }
};