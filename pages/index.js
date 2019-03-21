import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Menu from '../components/Menu'
import menuItems from '../lib/menuItems'

export default class Index extends Component {
  static async getInitialProps ({ req, query }) {
    return query
  }

  static propTypes = {
    langcode: PropTypes.string.isRequired,
  }

  render () {
    const { langcode } = this.props
    return (
      <Layout>
        <h1>Welcome to Next.JS learning day!</h1>
        <Menu
          menuItems={menuItems}
          langcode={langcode}
        />
      </Layout>
    )
  }
}