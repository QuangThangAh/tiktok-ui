import { Wrapper as PopperWrapper } from "~/components/Popper";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import MenuItems from "./MenuItem";

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItems key={index} data={item} />
        ));
    };
    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1">
                    <PopperWrapper className={cx("menu-popper")}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
