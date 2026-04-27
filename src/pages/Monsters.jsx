import { monsters } from '../data/content';

function DangerBar({ level }) {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <span style={{ fontSize: 12, color: '#9ca3af', marginRight: 4 }}>위험도:</span>
      {[1,2,3,4].map(i => (
        <div key={i} style={{
          width: 16, height: 16, borderRadius: 3,
          background: i <= level
            ? level >= 4 ? '#ef4444' : level >= 3 ? '#f97316' : '#eab308'
            : '#1e3a5f',
        }} />
      ))}
    </div>
  );
}

export default function Monsters({ isFav, onToggleFav }) {
  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#ef4444' }}>👾 몬스터 대처법</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>몬스터를 만났을 때 어떻게 해야 할까요?</p>
      </div>
      <div style={{
        background: '#2a1515', border: '2px solid #ef444444', borderRadius: 12,
        padding: 12, marginBottom: 16, fontSize: 13, color: '#fca5a5',
      }}>
        ⚠️ 처음엔 도망가는 게 최선이에요! 강해지면 그때 싸워요
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {monsters.map(monster => {
          const favId = `monster-${monster.id}`;
          return (
            <div key={monster.id} style={{
              background: '#1e2d40', border: `2px solid ${monster.color}44`,
              borderRadius: 16, overflow: 'hidden',
            }}>
              <div style={{
                background: `${monster.color}22`, padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: 12,
                borderBottom: `1px solid ${monster.color}33`,
              }}>
                <span style={{ fontSize: 44 }}>{monster.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 900, fontSize: 20, color: monster.color }}>{monster.name}</div>
                  <DangerBar level={monster.danger} />
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
              <div style={{ padding: 16 }}>
                <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 12, lineHeight: 1.6 }}>
                  {monster.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <InfoRow icon="⚔️" label="공격 방법" value={monster.attack} color="#ef4444" />
                  <InfoRow icon="🎯" label="약점" value={monster.weakness} color="#4ade80" />
                  <InfoRow icon="💰" label="드롭 아이템" value={monster.drop} color="#f59e0b" />
                </div>
                <div style={{
                  marginTop: 12, background: '#0f2a1a',
                  border: `1px solid ${monster.color}44`, borderRadius: 8,
                  padding: '10px 12px', fontSize: 14, color: '#4ade80',
                  fontWeight: 700, lineHeight: 1.6,
                }}>
                  🌟 팁: {monster.tip}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, color }) {
  return (
    <div style={{ display: 'flex', gap: 8, fontSize: 13 }}>
      <span>{icon}</span>
      <span style={{ color, fontWeight: 700, flexShrink: 0 }}>{label}:</span>
      <span style={{ color: '#94a3b8' }}>{value}</span>
    </div>
  );
}
