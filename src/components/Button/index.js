import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    small = false,
    big = false,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    children,
    className,
    onClick,
    leftIcon,
    rightIcon,
    passProps,
}) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps,
    };
    //Delete event when has disabled prop
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        small,
        big,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
