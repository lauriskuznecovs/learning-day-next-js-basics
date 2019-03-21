import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'

const parseUrl = ({path, langcode}) => (
  path === '/' ? path : `/${langcode}${path}`
)

const Menu = ({menuItems, langcode}) => (
  <nav role="navigation" aria-label="Main menu">
    <h2>Main Navigation</h2>
    <ul role="menubar" aria-hidden="false">
      {menuItems.map(menuItem => {
        const url = parseUrl({path: menuItem.path, langcode})
        return (
          <li key={menuItem.id}>
            {menuItem.path === '/'
              ?
                <Link route="index" params={{langcode}}>
                  <a>{menuItem.title}</a>
                </Link>
              :
                <Link route={url}>
                  <a>{menuItem.title}</a>
                </Link>
            }
          </li>
        )
      })}
    </ul>
  </nav>
)

Menu.propTypes = {
  langcode: PropTypes.string.isRequired,
}

export default Menu