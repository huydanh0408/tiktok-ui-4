import classNames from 'classnames/bind';
import { Header, Sidebar } from './';

import style from './CreatorCenter.module.scss';
const cx = classNames.bind(style);

function CreatorCenter({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default CreatorCenter;
