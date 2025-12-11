import styles from './Features.module.css';

const features = [
    {
        title: "01. 核心功能：姿态识别与跌倒报警",
        description: "内置 AI 深度学习算法，分析人体骨骼垂直速度和加速度。准确识别跌倒、滑倒、滞留（久坐不起），准确率 >99.5%。",
        icon: "⚠️"
    },
    {
        title: "02. 增值功能：生命体征非接触监测",
        description: "利用多普勒效应捕捉胸腔微动。24小时无感监测呼吸频率、心率，无需佩戴手环，夜间睡眠亦可监测。",
        icon: "💓"
    },
    {
        title: "03.毫秒级云端报警",
        description: "异常情况实时上传云端，毫秒级响应。支持多种报警方式，第一时间通知子女或看护人员。",
        icon: "☁️"
    }
];

export default function Features() {
    return (
        <section id="features" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>系统功能</h2>
                    <p className={styles.subtitle}>
                        毫米波雷达核心科技，为长者提供全方位保护
                    </p>
                </div>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
