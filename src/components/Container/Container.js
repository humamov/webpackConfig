import React from 'react'
import styles from './Container.scss'

const Container = (props) => {
  const { children, variant } = props
  return (
    <div className={`
      ${styles.root}
      ${styles[`type-${variant}`]}
    `}>
      {children}
    </div>
  )
}

export default Container
