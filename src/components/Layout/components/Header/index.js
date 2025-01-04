import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: "VietNamese",
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: "Feedback and Help",
            to: "/feedback",
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: "Keyboard Shotcut",
        },
    ];
    useEffect(() => {}, []);
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo-header")}>
                    <img src={images.logo} alt="logo" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx("search-result")} tabIndex="-1">
                            <PopperWrapper>
                                <div>
                                    <h4 className={cx("title")}>
                                        Kết quả tìm kiếm
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input placeholder="Tìm kiếm" spellCheck="false" />

                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={cx("loading")}
                        />

                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("action")}>
                    <Button text>Upload</Button>
                    <Button primary rounded to="/" className={cx("custom")}>
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx("more-btn")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
