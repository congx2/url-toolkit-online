import { memo, useState } from 'react'
import Input from 'src/components/Input'
import Textarea from 'src/components/Textarea'
import Button from 'src/components/Button'
import Result from 'src/components/Result'

const UrlJoin = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const onTextChange = text => {
    setText(text)
  }
  const onClear = () => {
    setText('')
    setResult('')
  }
  const onClick = () => {
    if (!text.trim()) {
      return
    }
    setResult(encodeURIComponent(text.trim()))
  }
  return (
    <div>
      <h3 className="page-title">RUL拼接</h3>
      <Input
        value={text}
        placeholder="请输入RUL"
        onTextChange={onTextChange}
        onClear={onClear}
      />
      <Textarea className="marginTop15" placeholder="请输入参数" />
      <Button
        className="marginTop15"
        disabled={!text.trim().length}
        onClick={onClick}
      >
        拼接
      </Button>
      <Result className="marginTop15" title="拼接结果:">
        {result}
      </Result>
    </div>
  )
}

export default memo(UrlJoin)
