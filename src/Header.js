import React, { Component } from 'react';
import instagramlogo from './images/instagram-icon.svg';
import facebooklogo from './images/facebook-icon.svg';
import cartlogo from './images/cart-icon.svg';

export default class Header extends Component {
    render() {
        return (
            <div className='m-5'>
                <div className='flex justify-center'>
                    <div>
                        <p className='font-bold underline'>
                            Ecommerce
                        </p>
                    </div>
                    <div className='flex wrap items-center'>
                        <a>
                            <img
                                src={ instagramlogo }
                                className='w-12'
                            />
                        </a>
                        <a>
                            <img
                                src={ facebooklogo }
                                className='w-8'
                            />
                        </a>
                        <a>
                            <img
                                src={ cartlogo }
                                className='w-8'
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
