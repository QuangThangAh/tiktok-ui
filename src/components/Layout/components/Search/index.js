import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState, useRef } from "react";
import "tippy.js/dist/tippy.css";

import { useDebounce } from "~/hooks";
import classNames from "classnames/bind";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import * as searchService from "~/apiServices/searchService";

function Search() {
    const cx = classNames.bind(styles);

    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [focusInput, setFocusInput] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

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
