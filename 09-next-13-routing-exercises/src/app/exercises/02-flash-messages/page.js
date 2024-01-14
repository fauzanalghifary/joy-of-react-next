import React from 'react';
import Link from 'next/link';
import ToastShelf from "../../../components/ToastShelf";

export const metadata = {
    title: 'Flash Messages Exercise',
}

function FlashMsgExercise() {

    return (
        <>
            <main>
                <h1>Welcome to my website!</h1>
                <p>
                    Got feedback? Please{' '}
                    <Link href="/exercises/02-flash-messages/contact">
                        contact us
                    </Link>
                    .
                </p>
            </main>
            <ToastShelf/>
        </>
    );
}

export default FlashMsgExercise;
