import { memo } from 'react'
import { classes, applyCallback } from 'src/utils'
import styles from './index.module.less'

const Button = props => {
  const { inline = false, disabled = false, className } = props
  const boxClassName = classes([
    className,
    styles.btn,
    inline && styles.inline,
    disabled && styles.disabled
  ])
  const onClick = e => {
    !disabled && applyCallback(props.onClick, e)
  }
  return (
    <div className={boxClassName} onClick={onClick}>
      {props.children}
    </div>
  )
}

export default memo(Button)
