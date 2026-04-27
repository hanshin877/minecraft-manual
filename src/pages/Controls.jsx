import { controls } from '../data/content';

function KeyBadge({ k }) {
  return (
    <span style={{
      display: 'inline-block', background: '#1e3a5f',
      border: '2px solid #3b82f6', borderRadius: 6,
      padding: '2px 10px', fontSize: 13, fontWeight: 700,
      color: '#93c5fd', margin: '2px 3px',
    }}>{k}</span>
  );
}

export default function Controls({ isFav, onToggleFav }) {
  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#3b82f6' }}>🎮 조작법</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>키보드와 마우스 사용법을 배워요</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {controls.map(item => {
          const favId = `control-${item.id}`;
          return (
            <div key={item.id} style={{
              background: '#1e2d40', border: '2px solid #1e3a5f', borderRadius: 16, padding: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                <span style={{ fontSize: 32 }}>{item.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 17, color: '#e2e8f0' }}>{item.title}</div>
                  <div style={{ marginTop: 4 }}>
                    {item.keys.map(k => <KeyBadge key={k} k={k} />)}
                  </div>
                </div>
                <button
                  onClick={() => onToggleFav(favId)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 22, padding: 4,
                    filter: isFav(favId) ? 'none' : 'grayscale(1) opacity(0.4)',
                    transition: 'all 0.2s',
                  }}
                >❤️</button>
              </div>
              <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6 }}>{item.description}</p>
              <div style={{
                marginTop: 10, background: '#0f2a1a',
                border: '1px solid #4ade8033', borderRadius: 8,
                padding: '8px 12px', fontSize: 13, color: '#4ade80',
              }}>
                💡 {item.tip}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
