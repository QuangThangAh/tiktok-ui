import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccoutItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                src="https://bookvexe.vn/wp-content/uploads/2023/04/tong-hop-25-hinh-anh-gai-xinh-toc-ngan-dep-nhat_1.jpg"
                alt="avatar"
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyễn Quang Hải </span>
                    <FontAwesomeIcon
                        className={cx("icon")}
                        icon={faCircleCheck}
                    />
                </h4>
                <span className={cx("username")}>Godofwar</span>
            </div>
        </div>
    );
}

export default AccountItem;
