import React, { useEffect, useRef } from "react";
import { PropsWithCS } from "x-ui";
import classNames from "classnames";

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
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultValue !== undefined && props.value === undefined) {
      if (inputRef.current) {
        inputRef.current.value = defaultValue;
      }
    }
  }, []);

  const classes = classNames(
    ["x-input", "x-input__wrapper"],
    className,
    inputSizeClassName[size]
  );

  return (
    <div className={classes}>
      <input className="x-input__inner" ref={inputRef} {...rest} type={type} />
    </div>
  );
};

export default Input;
