import { useState } from 'react'
import Menu from './components/Menu'
// import Button from './components/Button'

function App() {
  const [index, setIndex] = useState('')
  const onSelect = (index: string) => {
    console.log(index)
    setIndex(index)
  }
  return (
    <div className="App">
      <Menu selectedIndex={index} defaultOpenSubMenus={['aaa']}  mode="vertical" onSelect={onSelect}>
        <Menu.Item disabled>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
        <Menu.Item>Option 5</Menu.Item>
        <Menu.SubMenu index="aaa" title="下拉菜单">
          <Menu.Item>Option 5zzzz</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="下拉菜单">
          <Menu.Item>Option 5zzzz</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <Menu selectedIndex={index} onSelect={onSelect}>
        <Menu.Item disabled>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
        <Menu.Item>Option 5</Menu.Item>
        <Menu.SubMenu title="下拉菜单">
          <Menu.Item>Option 5zzzz</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="下拉菜单">
          <Menu.Item>Option 5zzzz</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

export default App
