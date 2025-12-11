// styles import removed

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '8rem 0', textAlign: 'center', background: 'var(--background)' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    准备好为家人提供<br />最好的守护了吗？
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.25rem' }}>
                    立即加入等待名单，获取最先进的长者守护系统体验资格。
                </p>
                <form style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <input
                        type="email"
                        placeholder="请输入您的邮箱"
                        style={{
                            padding: '1rem 1.5rem',
                            borderRadius: '9999px',
                            border: '1px solid var(--border)',
                            background: 'var(--surface)',
                            color: 'var(--text-primary)',
                            minWidth: '300px',
                            outline: 'none'
                        }}
                    />
                    <button
                        type="button" // Prevent submit for demo
                        style={{
                            padding: '1rem 2.5rem',
                            background: 'var(--primary)',
                            color: 'white',
                            borderRadius: '9999px',
                            fontWeight: 600,
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                        }}
                    >
                        获取体验资格
                    </button>
                </form>
            </div>
        </section>
    );
}
