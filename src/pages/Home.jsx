export default function Home({ onNavigate }) {
  const cards = [
    { id: 'controls', emoji: '🎮', title: '조작법', desc: '어떻게 움직이는지 배워요', color: '#3b82f6' },
    { id: 'items', emoji: '🎒', title: '아이템/블록', desc: '아이템들을 알아봐요', color: '#f59e0b' },
    { id: 'recipes', emoji: '⚒️', title: '제조법', desc: '아이템을 어떻게 만드나요?', color: '#8b5cf6' },
    { id: 'monsters', emoji: '👾', title: '몬스터 대처법', desc: '몬스터를 물리쳐요!', color: '#ef4444' },
    { id: 'survival', emoji: '🏕️', title: '생존 가이드', desc: '살아남는 방법을 알아요', color: '#10b981' },
  ];

  return (
    <div style={{ padding: '20px 16px 100px' }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        padding: '24px 0 20px',
        borderBottom: '2px dashed #2d4a3e',
        marginBottom: 24,
      }}>
        <div style={{ fontSize: 64 }}>⛏️</div>
        <h1 style={{
          fontSize: 28,
          fontWeight: 900,
          color: '#4ade80',
          textShadow: '0 0 20px rgba(74,222,128,0.5)',
          marginTop: 8,
          lineHeight: 1.2,
        }}>
          찬우를 위한<br/>마인크래프트 초보가이드
        </h1>
        <p style={{ color: '#9ca3af', fontSize: 14, marginTop: 8 }}>
          🌟 같이 배워볼까요? 🌟
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.id)}
            style={{
              background: `linear-gradient(135deg, ${card.color}22, ${card.color}11)`,
              border: `2px solid ${card.color}44`,
              borderRadius: 16,
              padding: '16px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              textAlign: 'left',
              transition: 'all 0.2s',
              color: '#fff',
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            onTouchStart={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onTouchEnd={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              fontSize: 40,
              width: 56,
              height: 56,
              background: `${card.color}33`,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {card.emoji}
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: card.color }}>{card.title}</div>
              <div style={{ fontSize: 13, color: '#9ca3af', marginTop: 2 }}>{card.desc}</div>
            </div>
            <div style={{ marginLeft: 'auto', color: card.color, fontSize: 20 }}>›</div>
          </button>
        ))}
      </div>

      {/* Footer tip */}
      <div style={{
        marginTop: 24,
        padding: 16,
        background: '#1a2a1a',
        border: '2px solid #4ade8033',
        borderRadius: 12,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 24 }}>💡</div>
        <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 8, lineHeight: 1.6 }}>
          처음엔 <span style={{ color: '#4ade80', fontWeight: 700 }}>창작 모드</span>로 시작해서<br/>
          마음껏 탐험해보세요!
        </p>
      </div>
    </div>
  );
}
