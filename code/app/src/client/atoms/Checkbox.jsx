import React, {PropTypes} from 'react'
import classNames from 'classnames'
import Styles from './Checkbox.scss'

const Checkbox = (props) => {
  const classes = classNames('c-input c-checkbox', Styles.default)

  return (
    <label className={classes}>
      <input type="checkbox" onChange={props.onChange} checked={props.checked}/>
      <span className="c-indicator"></span>
      {props.children}
    </label>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}


export default Checkbox
