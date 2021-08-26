import Icon from "../Icon";
import { PropsWithCS } from "x-ui";
import classNames from "classnames";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

type InputSize = "large" | "middle" | "small";

interface InputBaseProps {
  allowClear: boolean;
  defaultValue: string;
  disabled: boolean;
  size: InputSize;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type InputProps = PropsWithCS<
  Partial<InputBaseProps> &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value">
>;

const inputSizeClassName: Record<InputSize, string> = {
  large: "x-input--lg",
  middle: "",
  small: "x-input--sm",
};

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    defaultValue,
    type = "text",
    allowClear = false,
    size = "middle",
    onChange,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [showClear, setShowClear] = useState<boolean>(
    !!(props.value || defaultValue)
  );

  useEffect(() => {
    if (defaultValue !== undefined && props.value === undefined) {
      if (inputRef.current) {
        inputRef.current.value = defaultValue;
      }
    }
  }, []);

  // 避免 clearIcon 闪烁
  useLayoutEffect(() => {
    if (allowClear) {
      setShowClear(inputRef.current?.value !== "");
    }
  });

  const classes = classNames("x-input", className, inputSizeClassName[size], {
    "x-input--clearable": allowClear,
  });

  if (allowClear) {
    const clearClasses = classNames("x-input__clear", {
      "x-input__clear--hidden": !showClear,
    });

    const clearInputValue = () => {
      if (inputRef.current) {
        // 不会触发 onChange
        inputRef.current.focus();
        inputRef.current.value = "";
        // 主要目的是让组件更新，useLayoutEffect 会设置正确的状态
        setShowClear(false);
      }
    };

    const watchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setShowClear(e.target.value !== "");
      onChange && onChange(e);
    };

    return (
      <div className={classes}>
        <input
          {...rest}
          type={type}
          ref={inputRef}
          onChange={watchChange}
          className="x-input__inner"
        />
        <div className={clearClasses} onClick={clearInputValue}>
          <Icon icon="times-circle" />
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      <input
        {...rest}
        type={type}
        ref={inputRef}
        onChange={onChange}
        className="x-input__inner"
      />
    </div>
  );
};

export default Input;
