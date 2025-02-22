import type {Metadata} from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: 'Interior',
    description: '',
};

function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang={'en'}>
        <body className={''}>
        {children}
        </body>
        </html>
    );
}

export default RootLayout;
