import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Don't Get ZOHO'D</span>,
  project: {
    link: 'https://github.com/nickmackenzie/dont-get-zohod',
  },

  docsRepositoryBase: 'https://github.com/nickmackenzie/dont-get-zohod',

  editLink: {
    component: () => null,
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s - Don\'t Get Zoho\'d'
    }
  }

}

export default config
