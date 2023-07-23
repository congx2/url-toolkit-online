import { memo, useState } from 'react'
import Input from 'src/components/Input'
import Textarea from 'src/components/Textarea'
import Button from 'src/components/Button'
import Result from 'src/components/Result'

const UrlLive2Wxmp = () => {
  const [roomId, setRoomId] = useState('')
  const [type, setType] = useState('')
  const [customParams, setCustomParams] = useState('')
  const [result, setResult] = useState('')
  const onHrefChange = text => {
    setCustomParams(text)
  }
  const onRoomIdChange = text => {
    setRoomId(text)
  }
  const onClearRoomId = () => {
    setRoomId('')
  }
  const onClearHref = () => {
    setCustomParams('')
    setResult('')
  }
  const onClick = () => {
    // if (!appId.trim()) {
    //   return
    // }
    // setResult(encodeURIComponent(appId.trim()))
  }
  return (
    <div>
      <h3 className="page-title">生成小程序直播间URL</h3>
      <Input
        value={roomId}
        placeholder="请输入直播间Id(room_id) 必填"
        onTextChange={onRoomIdChange}
        onClear={onClearRoomId}
      />
      <Input
        value={type}
        className="marginTop15"
        placeholder="请输入直播间类型(type) 选填"
        onTextChange={onRoomIdChange}
        onClear={onClearRoomId}
      />
      <Textarea
        className="marginTop15"
        value={customParams}
        placeholder="请输入直播间自定义参数(custom_params) 选填"
        onTextChange={onHrefChange}
        onClear={onClearHref}
      />
      <Button className="marginTop15" disabled={false} onClick={onClick}>
        生成
      </Button>
      <Result className="marginTop15" title="直播间URL:">
        {result}
      </Result>
    </div>
  )
}

export default memo(UrlLive2Wxmp)
