import { useState } from 'react';
import { controls, items, recipes, monsters, survivalGuide } from '../data/content';

const allData = [
  ...controls.map(i => ({ ...i, type: 'controls', typeLabel: '조작법', typeColor: '#3b82f6', typeEmoji: '🎮' })),
  ...items.map(i => ({ ...i, type: 'items', typeLabel: '아이템', typeColor: '#f59e0b', typeEmoji: '🎒' })),
  ...recipes.map(i => ({ ...i, type: 'recipes', typeLabel: '제조법', typeColor: '#8b5cf6', typeEmoji: '⚒️' })),
  ...monsters.map(i => ({ ...i, type: 'monsters', typeLabel: '몬스터', typeColor: '#ef4444', typeEmoji: '👾' })),
  ...survivalGuide.map(i => ({ ...i, type: 'survival', typeLabel: '생존', typeColor: '#10b981', typeEmoji: '🏕️',
    name: i.day, description: i.title })),
];

function highlight(text, query) {
  if (!query || !text) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: '#fbbf24', color: '#000', borderRadius: 2, padding: '0 1px' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function Search({ onNavigate }) {
  const [query, setQuery] = useState('');

  const results = query.trim().length < 1 ? [] : allData.filter(item => {
    const q = query.toLowerCase();
    return (
      (item.name || item.title || '').toLowerCase().includes(q) ||
      (item.description || '').toLowerCase().includes(q) ||
      (item.tip || '').toLowerCase().includes(q) ||
      (item.weakness || '').toLowerCase().includes(q)
    );
  });

  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#fff' }}>🔍 검색</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>찾고 싶은 것을 검색해보세요</p>
      </div>

      {/* Search input */}
      <div style={{ position: 'relative', marginBottom: 20 }}>
        <span style={{
          position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
          fontSize: 18, pointerEvents: 'none',
        }}>🔍</span>
        <input
          autoFocus
          type="text"
          placeholder="검, 좀비, 곡괭이..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px 14px 44px',
            background: '#1e2d40',
            border: '2px solid #3b82f655',
            borderRadius: 14,
            color: '#e2e8f0',
            fontSize: 16,
            outline: 'none',
            fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.borderColor = '#3b82f6'}
          onBlur={e => e.target.style.borderColor = '#3b82f655'}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{
              position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
              background: '#374151', border: 'none', borderRadius: '50%',
              width: 24, height: 24, cursor: 'pointer', color: '#9ca3af',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
            }}
          >✕</button>
        )}
      </div>

      {/* Empty state */}
      {!query && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: '#4b5563' }}>
          <div style={{ fontSize: 56 }}>🔍</div>
          <p style={{ marginTop: 12, fontSize: 15 }}>검색어를 입력하면<br/>관련 내용을 찾아줘요!</p>
          <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {['좀비', '곡괭이', '침대', '크리퍼', '다이아몬드'].map(tag => (
              <button key={tag} onClick={() => setQuery(tag)} style={{
                background: '#1e2d40', border: '2px solid #2d3748',
                borderRadius: 20, padding: '6px 14px', color: '#94a3b8',
                fontSize: 13, cursor: 'pointer',
              }}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {query && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: '#4b5563' }}>
          <div style={{ fontSize: 48 }}>😢</div>
          <p style={{ marginTop: 12, fontSize: 15 }}>
            "<span style={{ color: '#f59e0b' }}>{query}</span>" 검색 결과가 없어요
          </p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>
            {results.length}개 결과
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {results.map(item => (
              <button
                key={`${item.type}-${item.id}`}
                onClick={() => onNavigate(item.type)}
                style={{
                  background: '#1e2d40',
                  border: `2px solid ${item.typeColor}44`,
                  borderRadius: 14,
                  padding: '14px 16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: '#fff',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: 30, flexShrink: 0 }}>{item.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{
                      fontSize: 10, background: `${item.typeColor}33`, color: item.typeColor,
                      padding: '2px 8px', borderRadius: 10, fontWeight: 700, flexShrink: 0,
                    }}>
                      {item.typeEmoji} {item.typeLabel}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#e2e8f0' }}>
                    {highlight(item.name || item.title, query)}
                  </div>
                  {item.description && (
                    <div style={{ fontSize: 13, color: '#6b7280', marginTop: 3, overflow: 'hidden',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {highlight(item.description, query)}
                    </div>
                  )}
                </div>
                <span style={{ color: item.typeColor, fontSize: 18, flexShrink: 0 }}>›</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
