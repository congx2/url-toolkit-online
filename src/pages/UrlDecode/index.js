import { useState } from 'react'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import Result from 'src/components/Result'

const UrlDecode = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const onTextChange = text => {
    setText(text)
  }
  const onClear = e => {
    setText('')
    setResult('')
  }
  const onClick = () => {
    if (!text.trim()) {
      return
    }
    setResult(decodeURIComponent(text.trim()))
  }
  return (
    <div>
      <h3 className="page-title">RUL解码</h3>
      <Input
        value={text}
        placeholder="请输入RUL"
        onTextChange={onTextChange}
        onClear={onClear}
      />
      <Button
        className="marginTop15"
        disabled={!text.trim().length}
        onClick={onClick}
      >
        解码
      </Button>
      <Result className="marginTop15" title="解码结果:">
        {result}
      </Result>
    </div>
  )
}

export default UrlDecode
