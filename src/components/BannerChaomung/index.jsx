import {useState, useEffect} from 'react';
import styles from './style.module.css';

export default function BannerChaomung() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setVisible(false);
  }

  return (
    <div className={styles.banner + (visible ? ' ' + styles.bannerShow : '')}>
      <div className={styles.icon} aria-hidden="true">👋</div>
      <div className={styles.body}>
        <p className={styles.title}>Chào mừng bạn đến với ACMan!</p>
        <p className={styles.text}>
          Cùng khám phá tài liệu hướng dẫn 4 loại hình doanh nghiệp ngay nhé.
        </p>
      </div>
      <button
        type="button"
        className={styles.close}
        aria-label="Đóng thông báo chào mừng"
        onClick={handleClose}>
        ×
      </button>
    </div>
  );
}