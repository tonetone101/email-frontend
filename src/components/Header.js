import React from 'react'

class Header extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a class="left brand-logo">Email</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a>Login With Google</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
