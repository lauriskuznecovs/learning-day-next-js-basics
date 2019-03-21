import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import menuItems from "../lib/menuItems";
import Menu from '../components/Menu'

export default class Node extends Component {
  static async getInitialProps ({ req, query }) {
    return query
  }

  static propTypes = {
    node: PropTypes.string.isRequired,
    langcode: PropTypes.string.isRequired,
  }

  render () {
    const { node, langcode } = this.props
    return (
      <Layout>
        <Menu
          menuItems={menuItems}
          langcode={langcode}
        />
      </Layout>
    )
  }
}
