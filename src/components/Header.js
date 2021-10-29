import React from 'react';
import PropTypes from 'prop-types'


const Header=({title})=> (
        <header className="top">
            <div className="wrap">
                <div className="header-content">
                    <div className="header-rating">
                        <div className="header-rating_tag">Рейтинг:</div>
                        <div className="header-rating_icon">★★★★★</div>
                    </div>
                    <div className="header-divider">{title}</div>
                    <h1 className="font-effect-fire-animation">Hot Burgers</h1>
                    <h3>
                            <span>
                                Быстрая достака горячих<span className='sub-header'> #бургеров</span>
                            </span>
                    </h3>
                </div>
            </div>
        </header>
    );

Header.propTypes = {
    title: PropTypes.string
};
export default Header;