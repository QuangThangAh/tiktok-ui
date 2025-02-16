import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import styles from "./AccoutItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image
                src={data.avatar}
                alt={data.full_name}
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faCircleCheck}
                        />
                    )}
                </h4>
                <span className={cx("username")}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
