import React from 'react'
import Global from './Global'
import Header from './Header'
import Footer from './Footer'
import RecentPosts from './RecentPosts'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children, homepage }) => {
  return (
    <div>
      <ThemeProvider
        theme={{
          bodyBg: '#fff',
          bodyBgAlt: '#F5F5F5',
          linkAlt: '#302D2F',
          accent: '#6DC1FF',
          accentDark: '#006bb7',
          accentDarker: '#005693',
          textDefault: '#555',
          textHeader: '#302D2F',
          pad: '20px',
          footerBg: '#302D2F',
          footerColor: '#fff'
        }}>
        <div>
          <Global homepage={homepage} />
          <Header />
          {children}
          <RecentPosts />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
