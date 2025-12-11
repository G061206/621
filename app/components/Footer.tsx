import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>ElderGuardian 长者卫士</h3>
                        <p>
                            基于毫米波雷达与AI视觉技术的长者安全守护系统。
                            非侵入式，24小时无感看护，让爱与安心常在。
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h4>产品</h4>
                        <ul>
                            <li><Link href="#features">功能亮点</Link></li>
                            <li><Link href="#technology">核心技术</Link></li>
                            <li><Link href="#pricing">价格方案</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>公司</h4>
                        <ul>
                            <li><Link href="#about">关于我们</Link></li>
                            <li><Link href="#careers">加入我们</Link></li>
                            <li><Link href="#news">新闻动态</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>联系我们</h4>
                        <ul>
                            <li><a href="mailto:contact@elderguardian.com">技术支持</a></li>
                            <li><Link href="#twitter">微信公众号</Link></li>
                            <li><Link href="#linkedin">商务合作</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    &copy; {new Date().getFullYear()} ElderGuardian. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
