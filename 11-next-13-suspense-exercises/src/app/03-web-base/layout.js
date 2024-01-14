import React from 'react';
import {Kanit} from 'next/font/google';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import './styles.css';

const primaryFont = Kanit({
    weight: ['300', '500'],
    subsets: ['latin'],
});

function WebBaseLayout({children}) {
    return (
        <div
            className="web-base"
            style={{
                '--font-family-primary':
                primaryFont.style.fontFamily,
            }}
        >
            <React.Suspense fallback={null}>
                <SiteHeader/>
            </React.Suspense>
            <main>{children}</main>
            <React.Suspense fallback={null}>
                <SiteFooter/>
            </React.Suspense>
        </div>
    );
}

export default WebBaseLayout;
