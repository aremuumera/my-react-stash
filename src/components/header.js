import PropTypes from 'prop-types' // for props

import React from 'react'

const header = ({title}) => {
  return (
    <header>
    <h1>{title} </h1>
    </header>
  )
}

header.defaultProps = {
    title: 'Task tracker',
}

header.propTypes =  {
    title: PropTypes.string,
}

export default header
