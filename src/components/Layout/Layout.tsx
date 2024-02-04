/**
 * Layout.tsx
 *
 * This component serves as the primary layout structure for the application.
 * It wraps the application content with a header, main content area, and footer.
 */
import {Outlet} from 'react-router-dom';

import Footer from '../Footer/Footer.tsx';
import Header from '../Header/Header.tsx';

import './Layout.scss'

function Layout() {

    return (
        <div className="site-wrapper">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;