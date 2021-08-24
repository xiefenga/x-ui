interface ButtonBaseProps {
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 按钮尺寸
   */
  size: "small" | "large" | "middle";
  /**
   * 按钮类型
   */
  type: "default" | "primary" | "link" | "success" | "info";

  /**
   * 按钮的链接
   */
  href: string;

  /**
   * Anchor 的 target 属性，仅当 href 属性存在时有效
   */
  target: string;

  /**
   * 原生 button 的 type 属性
   */
  htmlType: "submit" | "button" | "reset";

  /**
   * 按钮独占一行
   */
  block: boolean;
  /**
   * 按钮形状
   */
  shape: "circle" | "round";
  /**
   * 按钮的加载状态
   */
  loading: boolean;
  /**
   * 点击事件
   */
  onClick: React.MouseEventHandler<HTMLElement>;
}

export type ButtonProps = Partial<ButtonBaseProps>;

const Button: React.FC<ButtonProps> = () => null;

Button.defaultProps = {
  size: "middle",
  type: "default",
  htmlType: "button",
  loading: false,
};

export default Button;
