import React from 'react';

import ToastProvider from "../../../components/ToastProvider";
import './styles.css';

export const metadata = {
    title: 'Default title',
}

function FlashMsgLayout({children}) {
    return (
        <html lang="en">
        <body>
        <ToastProvider>
            {children}
        </ToastProvider>
        </body>
        </html>
    );
}

export default FlashMsgLayout;
