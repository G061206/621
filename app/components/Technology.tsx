import styles from './Technology.module.css';

export default function Technology() {
    return (
        <section id="technology" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>01. 核心技术</span>
                    <h2 className={styles.title}>
                        光学隐私脱敏 (Privacy First)<br />
                        (Privacy First)
                    </h2>
                    <p className={styles.description}>
                        采用 60GHz 毫米波雷达技术，不采集光学图像，仅生成 3D 点云骨架。
                        彻底解决老人“被监视”的心理负担，实现卧室、卫生间等私密高危场景的全覆盖。
                    </p>
                    <span className={styles.label}>02. 核心功能</span>
                    <h2 className={styles.title}>
                        姿态识别与跌倒报警 (FallDetection)<br />
                        (Privacy First)
                    </h2>
                    <p className={styles.description}>
                        内置 AI深度学习算法，通过分析人体骨骼的垂直速度和加速度。
                        准确识别跌倒、滑倒、滞留（久坐不起）等异常，准确率大于99.5%，毫秒级报警上传云端。
                    </p>
                    <span className={styles.label}>03. 增值功能</span>
                    <h2 className={styles.title}>
                        生命体征非接触监测 (Vital Signs)<br />
                        (Privacy First)
                    </h2>
                    <p className={styles.description}>
                        利用多普勒效应捕捉胸腔微动。
                        24小时无感监测呼吸频率、心率，无需佩戴任何手环设备，夜间睡眠亦可监测。
                    </p>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ 仅生成3D点云骨架</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ 覆盖卧室/卫生间私密场景</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ 消除监控焦虑</li>
                    </ul>
                </div>

                <div className={styles.visual}>
                    <div className={styles.radarCone}></div>
                    <div className={styles.device}>
                        <div className={styles.sensor}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
