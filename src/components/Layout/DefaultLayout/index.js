import Header from "~/components/Layout/components/Header";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
