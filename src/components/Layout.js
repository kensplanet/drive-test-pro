import React from 'react'
import Global from './Global'
import Header from './Header/DesktopHeader'
import Footer from './Footer'
import RecentPosts from './RecentPosts'
import {ThemeProvider} from 'styled-components'

const Layout = ({children, homepage}) => {
    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <ThemeProvider
                theme={{
                    bodyBg: '#fff',
                    bodyBgAlt: '#F5F5F5',
                    linkAlt: '#302D2F',
                    accent: '#3f51b5',
                    accentDark: '#3f51b5',
                    accentDarker: '#3f51b5',
                    textDefault: '#555',
                    textHeader: '#302D2F',
                    pad: '10px',
                    footerBg: '#302D2F',
                    footerColor: '#fff',
                    black: '#000'
                }}>
                <div>
                    <Global homepage={homepage}/>
                    <Header/>
                    {children}

                    <RecentPosts/>
                    <Footer/>
                </div>
            </ThemeProvider>
        </div>
    )
};

export default Layout
