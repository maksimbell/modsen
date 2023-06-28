import React from 'react'
import * as constants from '@constants'
import './style.css'

const BlockedInfo = () => {
  return (
    <div className="Blocked-info">
      <h2 className="Blocked-info__title">{constants.SERVICE_BLOCKED_TITLE}</h2>
      <p className="Blocked-info__description">{constants.SERVICE_BLOCKED_DESCRIPTION}</p>
    </div>
  )
}

export default BlockedInfo
