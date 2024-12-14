import {
    faCircleXmark,
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

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

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
                    <Button rounded>Upload</Button>
                    <Button primary rounded className={cx("custom")}>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
