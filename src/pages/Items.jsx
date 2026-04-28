import { useState } from 'react';
import { items } from '../data/content';

const categories = ['전체', '도구', '무기', '갑옷', '음식', '블록', '재료', '특수', '레드스톤'];

export default function Items({ isFav, onToggleFav }) {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filtered = activeCategory === '전체'
    ? items
    : items.filter(i => i.category === activeCategory);

  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#f59e0b' }}>🎒 아이템 & 블록</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>마인크래프트의 아이템들을 알아봐요</p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, overflowX: 'auto', paddingBottom: 4 }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? '#f59e0b' : '#1e2d40',
              color: activeCategory === cat ? '#000' : '#9ca3af',
              border: 'none', borderRadius: 20, padding: '6px 14px',
              fontSize: 13, fontWeight: activeCategory === cat ? 700 : 400,
              cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map(item => {
          const favId = `item-${item.id}`;
          return (
            <div key={item.id} style={{
              background: '#1e2d40', border: `2px solid ${item.color}44`,
              borderRadius: 16, padding: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                <div style={{
                  width: 52, height: 52, background: `${item.color}22`,
                  border: `2px solid ${item.color}66`, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, flexShrink: 0,
                }}>{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontSize: 10, background: `${item.color}33`, color: item.color,
                    padding: '2px 8px', borderRadius: 10, fontWeight: 700,
                  }}>{item.category}</span>
                  <div style={{ fontWeight: 700, fontSize: 17, color: '#e2e8f0', marginTop: 2 }}>{item.name}</div>
                </div>
                <button
                  onClick={() => onToggleFav(favId)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 22, padding: 4, flexShrink: 0,
                    filter: isFav(favId) ? 'none' : 'grayscale(1) opacity(0.4)',
                    transition: 'all 0.2s',
                  }}
                >❤️</button>
              </div>
              <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 8, lineHeight: 1.6 }}>{item.description}</p>
              <div style={{ fontSize: 13, color: '#64748b', marginBottom: 4 }}>
                <span style={{ color: '#f59e0b' }}>📦 얻는 방법:</span> {item.howToGet}
              </div>
              <div style={{ fontSize: 13, color: '#64748b' }}>
                <span style={{ color: '#4ade80' }}>✅ 용도:</span> {item.uses}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
