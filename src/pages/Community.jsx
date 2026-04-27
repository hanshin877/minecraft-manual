import { communityLinks } from '../data/content';

const badgeColors = {
  '인기': '#ef4444',
  '레전드': '#f59e0b',
  '어린이 추천': '#4ade80',
  '필수': '#3b82f6',
  '공식': '#8b5cf6',
  '커뮤니티': '#06b6d4',
  '레시피': '#f97316',
  '월드': '#10b981',
};

export default function Community() {
  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#06b6d4' }}>🌐 한국 커뮤니티</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>마인크래프트 한국 유튜버 & 사이트</p>
      </div>

      <div style={{
        background: '#0f1f2e',
        border: '2px solid #06b6d444',
        borderRadius: 12,
        padding: '12px 14px',
        marginBottom: 20,
        fontSize: 13,
        color: '#67e8f9',
      }}>
        💙 링크를 누르면 해당 사이트로 이동해요!
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {communityLinks.map(section => (
          <div key={section.category}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 12, paddingBottom: 8,
              borderBottom: `2px solid ${section.color}33`,
            }}>
              <span style={{ fontSize: 24 }}>{section.emoji}</span>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: section.color }}>{section.category}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {section.links.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#1e2d40',
                    border: `2px solid ${section.color}33`,
                    borderRadius: 14,
                    padding: '14px 16px',
                    textDecoration: 'none',
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${section.color}88`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${section.color}33`}
                >
                  <div style={{
                    width: 48, height: 48,
                    background: `${section.color}22`,
                    borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, flexShrink: 0,
                  }}>
                    {link.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 700, fontSize: 15, color: '#e2e8f0' }}>{link.name}</span>
                      {link.badge && (
                        <span style={{
                          fontSize: 10, fontWeight: 700,
                          background: `${badgeColors[link.badge] || '#6b7280'}22`,
                          color: badgeColors[link.badge] || '#9ca3af',
                          border: `1px solid ${badgeColors[link.badge] || '#6b7280'}44`,
                          padding: '1px 7px', borderRadius: 10,
                        }}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 12, color: '#6b7280', marginTop: 3, lineHeight: 1.5 }}>
                      {link.desc}
                    </p>
                  </div>
                  <span style={{ color: section.color, fontSize: 18, flexShrink: 0 }}>›</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
