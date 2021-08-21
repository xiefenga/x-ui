import Icon from './components/Icon'
import Loading from './components/Loading'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  // const [loading, setLoading] = useState(true)
  return (
    <div className="App">
      <Icon icon="spinner" spin />
      <br />
      <Loading />
      <br />

      <Button type="primary" loading>primary 按钮</Button>
      <Button type="success" loading>success 按钮</Button>
      <Button type="info" loading>info 按钮</Button>
      <Button type="warning" loading>warning 按钮</Button>
      <Button type="success" loading>success 按钮</Button>
      <Button type="danger" loading>danger 按钮</Button>
      <br />
      <Button type="primary" loading shape="round">primary 按钮</Button>
      <Button type="primary" loading size="large" shape="round">primary 按钮</Button>
      <Button type="primary" loading size="small" shape="round">primary 按钮</Button>
      <br />

      <Loading tip="aaa">
        <div>aaa</div>
      </Loading>

      <Loading loading={false} tip="aaa">
        <div>aaa</div>
        <div>aaa</div>
      </Loading>
      
    </div>
  )
}

export default App
