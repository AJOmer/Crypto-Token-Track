import React from 'react'
import './Token.css';

const Token = ({name, image, symbol, price, volume, priceChange, marketCap}) => {
    return (
        <div className='token-container'>
            <div className='token-row'>
                <div className='token'>
                    <img src={image} alt='crypto-token'/>
                    <p className='token-symbol'>{symbol}</p>
                </div>
                <div className='token-data'>
                    <p className='token-price'>${price}</p>
                    <p className='token-volume'>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='token-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='token-percent green'>{priceChange.toFixed(2)}%</p>
                    )
                }
                <p className='token-marketCap'>MKT Cap: ${marketCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Token