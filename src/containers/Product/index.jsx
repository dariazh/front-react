import React, {Component} from 'react';
import ProductList from '../../components/ProductList';
import {Form, Row, Col, FormGroup, Label, Input} from 'reactstrap';

export default class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initProduct: this.props.product,
            product: '',
            search: '',
            avaliableSize: [
                {
                    id: 0,
                    name: 'xs',
                    key: 'xs',
                    label: 'xs',
                    check: false
                },
                {
                    id: 1,
                    name: 's',
                    key: 's',
                    label: 's',
                    check: false
                },
                {
                    id: 2,
                    name: 'm',
                    key: 'm',
                    label: 'm',
                    check: false
                },
                {
                    id: 3,
                    name: 'l',
                    key: 'l',
                    label: 'l',
                    check: false
                },
                {
                    id: 4,
                    name: 'xl',
                    key: 'xl',
                    label: 'xl',
                    check: false
                },
                {
                    id: 5,
                    name: 'xxl',
                    key: 'xxl',
                    label: 'xxl',
                    check: false
                },
            ],
        };
        this.handleChange = this.handleChange.bind(this);

    };

    filterList = (event) => {
        let updatedList = this.state.initProduct;
        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({product: updatedList});
    };

    handleChange(e) {
        const itemId = e.target.id;
        const isChecked = e.target.checked;

        this.state.avaliableSize[itemId].check = isChecked;
        const avaliable = this.state.avaliableSize;
        avaliable[itemId].check = isChecked;

        this.setState({avaliableSize : avaliable});
        this.filterSize();
    };

    filterSize = () => {
        let updatedList = this.state.initProduct;
        let checkObj = this.state.avaliableSize;
        let updateListTemp = [];

        Array.prototype.unique = function() {
            let a = this.concat();
            for(let i=0; i<a.length; ++i) {
                for(let j=i+1; j<a.length; ++j) {
                    if(a[i] === a[j])
                        a.splice(j--, 1);
                }
            }
            return a;
        };

        checkObj.forEach((chObj, i) => {
            if(chObj.check){
                updateListTemp = updateListTemp.concat(updatedList.filter((prod)=>{
                    return prod.size.includes(chObj.name)
                })).unique();
            }
        });

        this.setState({product: updateListTemp});

    };

    componentWillMount = function () {
        this.setState({product: this.state.initProduct})
    };

    render() {
        const {search, product} = this.state;

        const Checkbox = ({type = 'checkbox', id, name, checked = false, onChange}) => (
            <input type={type} id={id} name={name} checked={checked} onChange={onChange}/>
        );


        if (search !== '' && product.name.indexOf(search) === -1) {
            return null;
        }
        return (<div className='product-item-wrapper'>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="productSearch">Search by product name</Label>
                            <Input type="text" id='productSearch' placeholder="Search"
                                   onChange={this.filterList}/>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Filters available size</div>
                    <Form className='mb-2'>
                        {
                            this.state.avaliableSize.map((item, i) => (
                                <FormGroup key={'key' + i} check inline>
                                    <Label check>
                                        <Checkbox id={item.id} name={item.name} checked={item.check}
                                                  onChange={this.handleChange}/>
                                        {item.name}
                                    </Label>
                                </FormGroup>
                            ))
                        }
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProductList product={this.state.product} itemsPerPage={2}/>
                </Col>
            </Row>
        </div>);
    }
};