const mainTabs = [
  { id: 'home', emoji: '🏠', label: '홈' },
  { id: 'search', emoji: '🔍', label: '검색' },
  { id: 'favorites', emoji: '❤️', label: '즐겨찾기' },
  { id: 'quiz', emoji: '🧩', label: '퀴즈' },
  { id: 'community', emoji: '🌐', label: '커뮤니티' },
];

export default function BottomNav({ active, onChange, favCount }) {
  return (
    <nav style={{
      position: 'fixed', bottom: 0,
      left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 480,
      background: '#0d1b2a',
      borderTop: '2px solid #4ade80',
      display: 'flex', zIndex: 100,
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {mainTabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            flex: 1, border: 'none',
            background: active === tab.id ? '#1a3a2a' : 'transparent',
            color: active === tab.id ? '#4ade80' : '#6b7280',
            padding: '8px 2px', cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 2,
            transition: 'all 0.2s',
            borderTop: active === tab.id ? '2px solid #4ade80' : '2px solid transparent',
            marginTop: -2, position: 'relative',
          }}
        >
          <span style={{ fontSize: 20 }}>{tab.emoji}</span>
          <span style={{ fontSize: 10, fontWeight: active === tab.id ? 700 : 400 }}>{tab.label}</span>
          {tab.id === 'favorites' && favCount > 0 && (
            <span style={{
              position: 'absolute', top: 4, right: '20%',
              background: '#ef4444', color: '#fff',
              borderRadius: '50%', width: 16, height: 16,
              fontSize: 9, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{favCount > 9 ? '9+' : favCount}</span>
          )}
        </button>
      ))}
    </nav>
  );
}
