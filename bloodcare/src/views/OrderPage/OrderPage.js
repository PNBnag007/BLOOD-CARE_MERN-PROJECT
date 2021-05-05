import React from 'react'
import Cart from 'shared/components/Cart/Cart';
import Footer from 'shared/components/Footer/Footer';
import Nav from 'shared/components/Nav/Nav';
import Title from 'shared/components/Title/Title';

const OrderPage = () => {
    return (
        <div>
            <Nav/>
            <Title title="Order"></Title>

            <Cart/>
            <Footer/>
        </div>
    )
}

export default OrderPage;
