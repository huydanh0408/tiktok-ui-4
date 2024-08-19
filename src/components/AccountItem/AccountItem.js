import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { VerifyBadge } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="avt"
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ad1e8369beb738bbe41f49137eb38833~c5_300x300.webp?lk3s=a5d48078&amp;nonce=74250&amp;refresh_token=8d2d7de86e173604f287d3e6eab7d27d&amp;x-expires=1724227200&amp;x-signature=kbpcp1VxDyfnFVmPvdCg%2F242VXE%3D&amp;shp=a5d48078&amp;shcp=c1333099"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>isaac.lion</span>
                    <span className={cx('verify-badge')}>
                        <VerifyBadge />
                    </span>
                </h4>
                <p className={cx('name')}>Isaac</p>
            </div>
        </div>
    );
}

export default AccountItem;
