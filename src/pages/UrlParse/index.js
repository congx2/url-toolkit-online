import { memo, useState } from 'react'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import Result from 'src/components/Result'

const UrlParse = () => {
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
      <h3 className="page-title">RUL解析</h3>
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
        解析
      </Button>
      <Result className="marginTop15" title="解析结果:">
        {result}
      </Result>
    </div>
  )
}

export default memo(UrlParse)
