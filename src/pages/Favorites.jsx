import { controls, items, recipes, monsters } from '../data/content';

const allItems = [
  ...controls.map(i => ({ ...i, favId: `control-${i.id}`, typeLabel: '조작법', typeColor: '#3b82f6', page: 'controls' })),
  ...items.map(i => ({ ...i, favId: `item-${i.id}`, typeLabel: '아이템', typeColor: '#f59e0b', page: 'items' })),
  ...recipes.map(i => ({ ...i, favId: `recipe-${i.id}`, typeLabel: '제조법', typeColor: '#8b5cf6', page: 'recipes' })),
  ...monsters.map(i => ({ ...i, favId: `monster-${i.id}`, typeLabel: '몬스터', typeColor: '#ef4444', page: 'monsters' })),
];

export default function Favorites({ favorites, onToggle, onNavigate }) {
  const favItems = allItems.filter(i => favorites.includes(i.favId));

  if (favItems.length === 0) {
    return (
      <div style={{ padding: '20px 16px 100px' }}>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: '#f472b6' }}>❤️ 즐겨찾기</h2>
          <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>자주 보는 항목을 저장해요</p>
        </div>
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#4b5563' }}>
          <div style={{ fontSize: 64 }}>💔</div>
          <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.8 }}>
            아직 즐겨찾기가 없어요!<br/>
            <span style={{ color: '#f472b6' }}>❤️ 버튼</span>을 눌러서<br/>
            자주 보는 항목을 저장해보세요
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#f472b6' }}>❤️ 즐겨찾기</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>{favItems.length}개 저장됨</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {favItems.map(item => (
          <div
            key={item.favId}
            style={{
              background: '#1e2d40',
              border: `2px solid ${item.typeColor}44`,
              borderRadius: 14,
              padding: '14px 16px',
              display: 'flex',
              gap: 12,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 32, flexShrink: 0 }}>{item.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{
                fontSize: 10, background: `${item.typeColor}33`, color: item.typeColor,
                padding: '2px 8px', borderRadius: 10, fontWeight: 700,
              }}>
                {item.typeLabel}
              </span>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#e2e8f0', marginTop: 3 }}>
                {item.name || item.title}
              </div>
              {item.description && (
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2,
                  overflow: 'hidden', display: '-webkit-box',
                  WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                  {item.description}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
              <button
                onClick={() => onNavigate(item.page)}
                style={{
                  background: `${item.typeColor}22`, border: `1px solid ${item.typeColor}44`,
                  borderRadius: 8, padding: '4px 10px', color: item.typeColor,
                  fontSize: 12, cursor: 'pointer', fontWeight: 700,
                }}
              >보기 ›</button>
              <button
                onClick={() => onToggle(item.favId)}
                style={{
                  background: '#ff1a4422', border: '1px solid #ff1a4444',
                  borderRadius: 8, padding: '4px 10px', color: '#f472b6',
                  fontSize: 12, cursor: 'pointer',
                }}
              >❤️ 삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
