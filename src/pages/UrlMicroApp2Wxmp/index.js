import { memo, useState } from 'react'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import Result from 'src/components/Result'

const UrlMicroApp2Wxmp = () => {
  const [appId, setAppId] = useState('')
  const [href, setHref] = useState('')
  const [result, setResult] = useState('')
  const onHrefChange = text => {
    setHref(text)
  }
  const onAppIdChange = text => {
    setAppId(text)
  }
  const onClearAppId = () => {
    setAppId('')
  }
  const onClearHref = () => {
    setHref('')
    setResult('')
  }
  const onClick = () => {
    if (!appId.trim()) {
      return
    }
    // setResult(encodeURIComponent(appId.trim()))
  }
  return (
    <div>
      <h3 className="page-title">生成小程序中转页跳微服务URL</h3>
      <Input
        value={appId}
        placeholder="请输入微服务appId"
        onTextChange={onAppIdChange}
        onClear={onClearAppId}
      />
      <Input
        className="marginTop15"
        value={href}
        placeholder="请输入微服务H5页面RUL"
        onTextChange={onHrefChange}
        onClear={onClearHref}
      />
      <Button
        className="marginTop15"
        disabled={!appId.trim().length}
        onClick={onClick}
      >
        生成小程序中转页URL
      </Button>
      <Result className="marginTop15" title="小程序中转页URL:">
        {result}
      </Result>
    </div>
  )
}

export default memo(UrlMicroApp2Wxmp)
