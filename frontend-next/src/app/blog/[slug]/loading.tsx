export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            gap: '1rem'
        }}>
            <div style={{
                width: '48px',
                height: '48px',
                border: '4px solid rgba(102, 126, 234, 0.1)',
                borderTopColor: '#667eea',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{
                color: '#64748b',
                fontSize: '14px',
                fontWeight: 500
            }}>Cargando artículo...</p>
        </div>
    );
}
