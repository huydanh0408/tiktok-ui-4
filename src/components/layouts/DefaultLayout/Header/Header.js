import classNames from 'classnames/bind';

import { SearchIcon, ClearIcon, LoadingIcon } from '~/components/Icons';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok logo" />
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
                <div className={cx('action')}>Action</div>
            </div>
        </div>
    );
}

export default Header;
