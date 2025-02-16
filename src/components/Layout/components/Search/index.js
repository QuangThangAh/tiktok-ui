import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState, useRef } from "react";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";

function Search() {
    const cx = classNames.bind(styles);

    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [focusInput, setFocusInput] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue
            )}&type=less`
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(setLoading(false));
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleBlurInput = () => setFocusInput(false);
    return (
        <HeadlessTippy
            interactive
            visible={focusInput && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1">
                    <PopperWrapper>
                        <div>
                            <h4 className={cx("title")}>Kết quả tìm kiếm</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleBlurInput}
        >
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm"
                    spellCheck="false"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setFocusInput(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx("loading")}
                    />
                )}

                <button className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
