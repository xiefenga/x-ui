import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Button size="large">click</Button>
      <Button size="small" onClick={e => console.log(e)} type="primary">click</Button>
      <Button block type="primary">click</Button>
      <Button type="link" disabled>click</Button>
      <br />
      <Button href="https://www.baidu.com">百度一下</Button>
      <Button type="primary" href="https://www.baidu.com" target="_blank">百度一下</Button>
      <Button type="primary" block href="https://www.baidu.com" target="_blank">百度一下</Button>
      <Button block disabled href="https://www.baidu.com" target="_blank">百度一下</Button>
    </div>
  );
}

export default App;
