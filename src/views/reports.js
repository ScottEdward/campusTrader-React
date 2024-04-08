import React from 'react'

import { Helmet } from 'react-helmet'

import './reports.css'

const Reports = (props) => {
  return (
    <div className="reports-container">
      <Helmet>
        <title>reports - campusTrader</title>
        <meta property="og:title" content="reports - campusTrader" />
      </Helmet>
    </div>
  )
}

export default Reports
