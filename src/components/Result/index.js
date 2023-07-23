import { memo } from 'react'
import { classes, applyCallback } from 'src/utils'
import styles from './index.module.less'

const Result = props => {
  const { title = '结果', className, duplicable = true } = props
  const boxClassName = classes([className, styles.result])
  const onClick = e => {
    applyCallback(props.onClick, e)
  }
  return (
    <div className={boxClassName} onClick={onClick}>
      <div className={styles.titleBox}>
        <span className={styles.title}>{title}</span>
        {!!duplicable && <span className={styles.copy}>(复制)</span>}
      </div>
      <div className={styles.output}>{props.children}</div>
    </div>
  )
}

export default memo(Result)
