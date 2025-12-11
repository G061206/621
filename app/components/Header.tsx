import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Elder<span>Guardian</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="#technology" className={styles.navLink}>核心技术</Link>
                    <Link href="#features" className={styles.navLink}>功能亮点</Link>
                    <Link href="#about" className={styles.navLink}>关于我们</Link>
                </nav>
                <Link href="#contact" className={styles.ctaButton}>
                    立即咨询
                </Link>
            </div>
        </header>
    );
}
