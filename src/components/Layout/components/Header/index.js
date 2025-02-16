import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faRightFromBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";

import images from "~/assets/images";
import styles from "./Header.module.scss";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);
function Header() {
    let currentUser = true;

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: "Tiếng Việt",

            children: {
                title: "Languages",
                data: [
                    {
                        code: "en",
                        title: "English",
                    },
                    {
                        code: "vi",
                        title: "Tiếng Việt",
                    },
                    {},
                ],
            },
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

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View Profile",
            to: "/user/profile",
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Setting",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo-header")}>
                    <img src={images.logo} alt="logo" />
                </div>
                {/* Search */}
                <Search />
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload video"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Message"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>{" "}
                            <Tippy
                                content="Inbox"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                rounded
                                to="/"
                                className={cx("custom")}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("avatar")}
                                src="https fs://th.bing.com/th/id/OIP.G4indH3BM_4gIPU_AQ1_RAHaHU?w=208&h=206&c=7&r=0&o=5&pid=1.7"
                                alt="avatar"
                                fallback="https://th.bing.com/th?id=OIP.2a-O0-W06eTvDLlgqW5_rwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
