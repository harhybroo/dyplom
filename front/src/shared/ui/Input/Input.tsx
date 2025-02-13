import React, { memo, type FC, type InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

export enum InputTheme {
    DEFAULT = "default",
    SEARCH = "search",
    AUTH = "auth",
    FILTER = "filter",
    FORM = "form",
}

type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
    theme?: InputTheme;
} & HTMLInputProps;

export const Input: FC<InputProps> = memo((props) => {
    const {
        children,
        theme = InputTheme.DEFAULT,
        value,
        onChange,
        type = "text",
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={`${styles[theme]}`} data-testid="input">
            {children}
            <input
                className={`${styles[theme + "_field"]}`}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
export default Input;
