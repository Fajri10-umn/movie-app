import React from 'react'
import Nav from '../Nav';
import Footer from '../Footer';
import { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode;
}
export default function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <div>
            <Nav />
            <div>{children}</div><br />
            <Footer />
        </div>
    )
}
