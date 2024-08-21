import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { SearchIcon, ClearIcon, LoadingIcon } from '~/components/Icons';
import { Popper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok logo" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />
                        <span className={cx('clear')}>
                            <ClearIcon />
                        </span>
                        <span className={cx('loading')}>
                            <LoadingIcon />
                        </span>
                        <span className={cx('search-btn')}>
                            <SearchIcon />
                        </span>
                    </div>
                </Tippy>
                <div className={cx('action')}>Action</div>
            </div>
        </div>
    );
}

export default Header;
