import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'

function buttonBaseTest(element: HTMLButtonElement) {
  expect(element).toBeInTheDocument()
  expect(element.tagName).toEqual('BUTTON')
  expect(element).toHaveClass('x-btn')
  expect(element.disabled).toBeFalsy()
}


describe('Button component test', () => {

  it('should render correct default button', () => {
    render(<Button>click</Button>)
    const element = screen.getByText('click') as HTMLButtonElement
    buttonBaseTest(element)
  })

  it('should render correct with different types', () => {
    render(<Button type="primary">click</Button>)
    const primaryBtn = screen.getByText('click') as HTMLButtonElement
    buttonBaseTest(primaryBtn)
    expect(primaryBtn).toHaveClass('x-btn-primary')
    render(<Button type="link">link</Button>)
    const linkBtn = screen.getByText('link') as HTMLButtonElement
    buttonBaseTest(primaryBtn)
    expect(linkBtn).toHaveClass('x-btn-link')
  })

  it('should render an anchor when has href prop', () => {
    render(<Button href="https://www.baidu.com">baidu</Button>)
    const element = screen.getByText('baidu') as HTMLAnchorElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('x-btn')
  })

  it('should invoke click event correctly', () => {
    const props = { onClick: jest.fn() }
    render(<Button {...props}>click</Button>)
    const element = screen.getByText('click') as HTMLButtonElement
    fireEvent.click(element)
    expect(props.onClick).toHaveBeenCalled()
  })

  it('should render a disabled button when get disabled', () => {
    // button
    const props = { disabled: true, onClick: jest.fn() }
    render(<Button {...props}>click</Button>)
    const element = screen.getByText('click') as HTMLButtonElement
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(props.onClick).not.toHaveBeenCalled()
    // anchor
    render(<Button {...props} href="/jjj">link</Button>)
    const link = screen.getByText('link') as HTMLAnchorElement
    expect(link).toHaveClass('disabled')
    fireEvent.click(element)
    expect(props.onClick).not.toHaveBeenCalled()
  })

  it('should render a button with classname and htmlType', () => {
    const element = render(<Button className="demo" htmlType="button">click</Button>)
      .getByText('click') as HTMLButtonElement
    expect(element).toHaveClass('demo')
    expect(element.type).toEqual('button')
  })

})

