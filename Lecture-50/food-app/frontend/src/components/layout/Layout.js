import React,{Fragment} from 'react'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
      <Fragment>
          <header>
            <MainNavigation/>
          </header>
          <main style={{marginTop:'13.5rem'}}>
              {props.children}
          </main>
          <footer>
              
          </footer>
    </Fragment>
  )
}

export default Layout