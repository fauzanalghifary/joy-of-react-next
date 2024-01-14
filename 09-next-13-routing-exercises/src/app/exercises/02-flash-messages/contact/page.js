'use client';
import React from 'react';
import {useRouter} from 'next/navigation'
import {ToastContext} from "../../../../components/ToastProvider";

function ContactPage() {
    const router = useRouter()
    const {createToast} = React.useContext(ToastContext)

    return (
        <main>
            <form onSubmit={(e) => {
                e.preventDefault()
                router.push('/exercises/02-flash-messages?msg=success')
                createToast('Message sent!', 'success')
            }}>
                <label htmlFor="name">Name:</label>
                <input id="name" required={true}/>

                <label htmlFor="message">Message:</label>
                <textarea id="message"/>

                <button>Submit</button>
            </form>
        </main>
    );
}

export default ContactPage;
