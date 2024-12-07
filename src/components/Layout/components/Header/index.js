import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo-header")}>
                    <img src={images.logo} alt="logo" />
                </div>
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
                <div className={cx("action")}></div>
            </div>
        </header>
    );
}

export default Header;
