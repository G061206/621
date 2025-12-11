import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Decorative Radar Rings */}
            <div className={styles.radarRing}></div>
            <div className={styles.radarRing}></div>
            <div className={styles.radarRing}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className="gradient-text">隐形守护</span><br />
                    时刻相伴
                </h1>
                <p className={styles.subtitle}>
                    采用 60GHz 毫米波雷达 + AI 视觉技术，为您提供 24 小时无感知的长者安全守护。
                </p>
                <div className={styles.buttonGroup}>
                    <Link href="#contact" className={styles.primaryButton}>
                        立即咨询
                    </Link>
                    <Link href="#technology" className={styles.outlineButton}>
                        核心技术
                    </Link>
                </div>
            </div>
        </section>
    );
}
