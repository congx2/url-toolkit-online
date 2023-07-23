import { memo, useMemo, useRef, useState } from 'react'
import { classes, applyCallback } from 'src/utils'
import styles from './index.module.less'

const Input = props => {
  const { type = 'text', value, defaultValue, placeholder = '' } = props
  const isControlled = defaultValue === undefined
  const inputRef = useRef(null)
  const textRef = useRef('')
  const [isEmptyText, setIsEmptyText] = useState(
    isControlled ? !value : !defaultValue
  )
  const [focused, setFocused] = useState(false)
  const [isCompositing, setIsCompositing] = useState(false)
  const boxClassName = classes([
    props.className,
    styles.inputBox,
    focused && styles.focused,
    !isEmptyText && styles.hasText
  ])

  const onFocus = e => {
    setFocused(true)
    applyCallback(props.onFocus, e)
  }
  const onBlur = e => {
    setFocused(false)
    setIsEmptyText(!textRef.current)
    applyCallback(props.onBlur, e)
  }
  const onInput = e => {
    applyCallback(props.onInput, e)
    if (!isCompositing) {
      textRef.current = e.target.value
      applyCallback(props.onTextChange, textRef.current)
    }
    setIsEmptyText(!textRef.current)
  }
  const onCompositionStart = e => {
    textRef.current = e.target.value
    setIsCompositing(true)
    setIsEmptyText(!textRef.current)
    applyCallback(props.onCompositionStart, e)
  }
  const onCompositionEnd = e => {
    textRef.current = e.target.value
    setIsCompositing(false)
    setIsEmptyText(!textRef.current)
    applyCallback(props.onCompositionEnd, e)
    applyCallback(props.onTextChange, textRef.current)
  }
  const nextProps = Object.assign({}, props, {
    type,
    placeholder: '',
    onFocus,
    onBlur,
    onInput,
    onCompositionStart,
    onCompositionEnd
  })
  delete nextProps.className
  delete nextProps.value
  delete nextProps.defaultValue
  delete nextProps.onTextChange
  delete nextProps.onClear
  Object.assign(nextProps, isControlled ? { value } : { defaultValue })
  const clear = () => {
    if (isControlled) {
      applyCallback(props.onClear, { value: '' })
      applyCallback(props.onTextChange, '')
    } else {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }
  return (
    <label className={boxClassName}>
      <input ref={inputRef} className={styles.input} {...nextProps} />
      {!!placeholder ? (
        <div className={styles.placeholder}>{placeholder}</div>
      ) : null}
      {isControlled && (
        <div className={styles.clear}>
          <div className={styles.round} onClick={clear}></div>
        </div>
      )}
    </label>
  )
}

export default memo(Input)
