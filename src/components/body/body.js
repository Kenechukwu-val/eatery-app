import React, { Component } from 'react'
import './body.css'
import Add from '../../assests/images/add.png'
import Order from '../../assests/images/order.png'
import Confirm from '../../assests/images/confirm.png'

export default class body extends Component {
    render() {
        return (
            <main className="main">
                <section className="available-items-box">
                    <div className="u-margin-bottom--medium">
                        <h1 className="heading-primary">
                            Order now
                        </h1>
                    </div>

                    <div className="items-list">
                        <div className="item u-margin-bottom--small">
                            <span className="item__name">Springroll</span>
                            <input type="number" placeholder="Quantity" className="item__input" />
                            <button class="item__btn">Add</button>
                        </div>

                        <div className="item u-margin-bottom--small">
                            <span className="item__name">Samosa</span>
                            <input type="number" placeholder="Quantity" className="item__input" />
                            <button class="item__btn">Add</button>
                        </div>

                        <div className="item u-margin-bottom--small">
                            <span className="item__name">Chicken BBQ</span>
                            <input type="number" placeholder="Quantity" className="item__input" />
                            <button class="item__btn">Add</button>
                        </div>

                    </div>

                    <div className="new-item u-margin-bottom--small u-display-none">
                        <input type="text" placeholder="Enter item" className="new-item__input-name"/>
                        <input type="number" placeholder="Enter unit price" className="new-item__input-price"/>
                        <input type="number" placeholder="Quantity" className="new-item__input" />
                        <button className="new-item__btn">Add</button>
                    </div>

                    <div className="item-btn-box" >
                        <button className="btn btn--fa btn--green">
                                <img src={Add} alt="Add" />
                                <span>New item row</span>
                        </button>
                    </div>
                </section>

                <section class="order-activity">
                    <div class="u-margin-bottom--medium"></div>
                        <div class="card my-order">
                            <h1 class="heading-primary u-margin-bottom--small">
                                My Order
                            </h1>

                            <div class=" current-order">
                                <div class="orders">
                                    <div class="orders__no">
                                        <img src={Order} alt="order" className="order-img" />
                                        <span>No Order item yet</span>
                                    </div>

                                    <div class="orders__yes">
                                        Orders Here
                                    </div>
                                </div>
                            </div>

                            <div class="order-info">
                                <div class="order-info__delivery">
                                        <span>Delivery:</span>
                                        <span>&#8358; 1000</span>
                                </div>

                                <div class="order-info__amount">
                                    <span>Total:</span>
                                    <span>&#8358; 0</span>
                                </div>
                            </div>
                            <div>  
                                <div class="u-btn-box " >
                                        <button class="btn btn--green btn--fa btn--fa-thick  ">
                                            <span>Confirm order</span>
                                            <img src={Confirm} alt="confirm" />
                                        </button>

                                        <button class="btn btn--grey">
                                            <span>Cancel</span>
                                        </button>
                                    </div>
                            </div>

                    </div>

                    <div class="card delivery-info">
                        <h1 class="heading-primary u-margin-bottom--small">
                            Delivery Info
                        </h1>

                        <div class="book__form">
                            <form action="" class="form">
                                <input type="text" class="form__input u-margin-bottom--small" id="name" placeholder="Name" required />
                                <input type="email" class="form__input u-margin-bottom--small" id="email" placeholder="Email" required />
                                <input type="text" class="form__input u-margin-bottom--small" id="address" placeholder="Address" required />
                                <input type="text" class="form__input u-margin-bottom--small" id="number" placeholder="Phone number" required />

                                <div class="form__group u-margin-bottom--medium">
                                    <input type="date" class="form__input form__input--short" placeholder="Delivery Date" required />
                                    <input type="time" class="form__input form__input--short" placeholder="Delivery Time" required />
                                </div>

                                <input type="submit" class="form__submit" value="Submit" />
                            </form>
                        </div>

                    </div>
                </section>
                
            </main>
        )
    }
}
