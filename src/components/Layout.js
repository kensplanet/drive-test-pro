import React from 'react'
import Global from './Global'
import Header from './Header/BaseHeader'
import Footer from './Footer'
import RecentPosts from './RecentPosts'
import { ThemeProvider } from 'styled-components'
import ContactUs from "./ContactUs";
import Dock from "./Dock/Dock";

const Layout = ({ children, homepage }) => {
  return (
    <div style={{backgroundColor: '#F5F5F5'}}>
      <ThemeProvider
        theme={{
          bodyBg: '#fff',
          bodyBgAlt: '#F5F5F5',
          linkAlt: '#302D2F',
          accent: '#3f51b5',
          accentDark: '#006bb7',
          accentDarker: '#005693',
          textDefault: '#555',
          textHeader: '#302D2F',
          pad: '10px',
          footerBg: '#302D2F',
          footerColor: '#fff',
            black: '#000'
        }}>
        <div>
          <Global homepage={homepage} />
          <Header />
          {children}
   {      <RecentPosts />}
            <Dock/>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
};

export default Layout
