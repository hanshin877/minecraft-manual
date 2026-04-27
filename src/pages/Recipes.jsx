import { useState } from 'react';
import { recipes } from '../data/content';

const categories = ['전체', '기본', '도구', '무기', '음식', '건축'];

function CraftingGrid({ grid }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4,
      background: '#0d1b2a', padding: 8, borderRadius: 10,
      border: '2px solid #1e3a5f', width: 130, flexShrink: 0,
    }}>
      {grid.flat().map((cell, i) => (
        <div key={i} style={{
          width: 36, height: 36,
          background: cell ? '#1e3a5f' : '#0d1b2a',
          border: cell ? '2px solid #3b82f655' : '2px solid #1e2d40',
          borderRadius: 6, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 10, color: '#94a3b8',
          fontWeight: 700, textAlign: 'center', lineHeight: 1.1, padding: 2,
        }}>
          {cell || ''}
        </div>
      ))}
    </div>
  );
}

export default function Recipes({ isFav, onToggleFav }) {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filtered = activeCategory === '전체'
    ? recipes
    : recipes.filter(r => r.category === activeCategory);

  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#8b5cf6' }}>⚒️ 제조법</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>제작대에서 아이템 만드는 방법이에요</p>
      </div>
      <div style={{
        background: '#1a1a2e', border: '2px solid #8b5cf644', borderRadius: 12,
        padding: 12, marginBottom: 16, fontSize: 13, color: '#a78bfa',
      }}>
        💜 제작대(🔨)를 땅에 놓고 오른쪽 클릭하면 3x3 칸이 나와요!
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, overflowX: 'auto', paddingBottom: 4 }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} style={{
            background: activeCategory === cat ? '#8b5cf6' : '#1e2d40',
            color: activeCategory === cat ? '#fff' : '#9ca3af',
            border: 'none', borderRadius: 20, padding: '6px 14px',
            fontSize: 13, fontWeight: activeCategory === cat ? 700 : 400,
            cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s',
          }}>{cat}</button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map(recipe => {
          const favId = `recipe-${recipe.id}`;
          return (
            <div key={recipe.id} style={{
              background: '#1e2d40', border: '2px solid #2d3748', borderRadius: 16, padding: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 28 }}>{recipe.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 17, color: '#e2e8f0' }}>{recipe.name}</div>
                  <div style={{ fontSize: 12, color: '#a78bfa' }}>→ {recipe.result}</div>
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
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CraftingGrid grid={recipe.grid} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 8, fontWeight: 700 }}>재료:</div>
                  {recipe.ingredients.map((ing, i) => (
                    <div key={i} style={{
                      fontSize: 13, color: '#64748b', padding: '3px 0',
                      borderBottom: '1px solid #1e3a5f',
                    }}>• {ing}</div>
                  ))}
                </div>
              </div>
              <div style={{
                marginTop: 12, background: '#0f1a2e',
                border: '1px solid #8b5cf633', borderRadius: 8,
                padding: '8px 12px', fontSize: 13, color: '#a78bfa',
              }}>
                💡 {recipe.tip}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
