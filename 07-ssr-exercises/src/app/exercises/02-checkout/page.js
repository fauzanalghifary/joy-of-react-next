'use client';
import React from 'react';

import DATA from './data';
import reducer from './reducer';
import StoreItem from './StoreItem';
import CheckoutFlow from './CheckoutFlow';
import './styles.css';

function CheckoutExercise() {
    const [alreadyInit, setAlreadyInit] = React.useState(false);
    const [items, dispatch] = React.useReducer(
        reducer,
        []
    );

    React.useEffect(() => {
        const items = JSON.parse(localStorage.getItem('local-checkout-items'));

        if (items) {
            items.forEach((item) => {
                dispatch({
                    type: 'add-item',
                    item,
                });
            });
        }
        setAlreadyInit(true);
    }, []);

    React.useEffect(() => {
        if (alreadyInit) {
            localStorage.setItem(
                'local-checkout-items',
                JSON.stringify(items)
            );
        }
    }, [items]);

    return (
        <>
            <h1>Neighborhood Shop</h1>

            <main>
                <div className="items">
                    {DATA.map((item) => (
                        <StoreItem
                            key={item.id}
                            item={item}
                            handleAddToCart={(item) => {
                                dispatch({
                                    type: 'add-item',
                                    item,
                                });
                            }}
                        />
                    ))}
                </div>

                <CheckoutFlow
                    alreadyInit={alreadyInit}
                    items={items}
                    taxRate={0.15}
                    handleDeleteItem={(item) =>
                        dispatch({
                            type: 'delete-item',
                            item,
                        })
                    }
                />
            </main>
        </>
    );
}

export default CheckoutExercise;
