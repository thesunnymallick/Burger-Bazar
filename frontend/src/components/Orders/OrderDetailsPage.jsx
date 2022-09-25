import React from 'react'

function OrderDetailsPage() {
    return (
        <section className='orderDetails-page'>
            <div className="conatiner">
                <div className="orderDetails">
                    <h1>Order Details Page </h1>
                    <div>
                        <h3>Order Details</h3>
                        <div>
                            <b>Order Id</b>
                            <p>7578578</p>
                        </div>
                    </div>

                    <div>
                        <h3>Shipping Adresss</h3>
                        <div>
                            <b>Adress</b>
                            <p>chandai, Borjora NBankura </p>
                        </div>

                    </div>


                    <div>
                        <h3>Contact Info</h3>
                        <div>
                            <b>Name</b>
                            <p>Alfe sunny Mallick</p>
                            <b>Phone</b>
                            <p>74736473625263, alfesunnymallick800@gmail.com </p>
                            <b>Phone</b>
                            <p>74736473625263, alfesunnymallick800@gmail.com </p>
                        </div>
                    </div>

                    <div>
                        <h3>Status</h3>
                        <div>

                            <b>Order Status</b>
                            <p>Processing</p>


                            <b >place At</b>
                            <p style={{ marginLeft: "20px" }}>10/12/2022</p>
                            <b>Delivery At</b>
                            <p>10/12/2022</p>

                        </div>
                    </div>

                    <div>
                        <h3>Ammount</h3>
                        <div className='ammount'>
                            <div>
                                <b>Item Total</b>
                                <p>645</p>
                            </div>
                            <div>
                                <b>Shipping Charger</b>
                                <p>0.34</p>
                            </div>
                            <div style={{ borderBottom: "1px solid black" }}>
                                <b>Tax</b>
                                <p>0.34</p>
                            </div>
                            <div>
                                <b>Total Ammount</b>
                                <p>6767</p>
                            </div>
                        </div>
                    </div>

                    <article>
                        <h3>Order Iteam</h3>
                        <div className='ORDERTITEM'>

                            <div>
                                <h4>Burger iteam 1</h4>
                                <div>
                                    <span>500</span>  x <span>2</span>
                                </div>

                            </div>

                            <div>
                                <h4>Burger iteam 1</h4>
                                <div>
                                    <span>500</span>  x <span>2</span>
                                </div>
                            </div>

                            <div style={{borderTop:"1px solid black"}}>
                                <h4>Sub Total</h4>
                                <div> <span>75768</span></div>
                            </div>
                        </div>
                    </article>


                </div>


            </div>
        </section>
    )
}

export default OrderDetailsPage