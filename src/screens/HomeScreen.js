import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { listProducts } from '../actions/productActions';
import { useLocation } from 'react-router-dom'; 

function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { error, loading, products, page, pages } = productList;

    const location = useLocation(); // Get the current location object
    const searchParams = new URLSearchParams(location.search); // Extract query parameters
    const keyword = searchParams.get('keyword') || ''; // Get the value of 'keyword' parameter
    const currentPage = searchParams.get('page') || 1; // Get the current page number

    useEffect(() => {
        dispatch(listProducts(keyword, currentPage)); // Pass the current page number
    }, [dispatch, keyword, currentPage]); // Update dependencies

    return (
        <div>
            {!keyword && <ProductCarousel />}
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <div>
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate pages={pages} page={page} keyword={keyword} />
                </div>
            )}
        </div>
    );
}

export default HomeScreen;
