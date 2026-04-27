import { survivalGuide } from '../data/content';

export default function Survival() {
  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#10b981' }}>🏕️ 생존 가이드</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>단계별로 따라하면 살아남을 수 있어요!</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {survivalGuide.map((guide, idx) => (
          <div key={guide.id} style={{
            background: '#1e2d40',
            border: `2px solid ${guide.color}44`,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
            {/* Day header */}
            <div style={{
              background: `linear-gradient(135deg, ${guide.color}33, ${guide.color}11)`,
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              borderBottom: `2px solid ${guide.color}33`,
            }}>
              <span style={{ fontSize: 40 }}>{guide.emoji}</span>
              <div>
                <div style={{ fontSize: 12, color: guide.color, fontWeight: 700, letterSpacing: 1 }}>
                  STEP {idx + 1}
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#e2e8f0' }}>{guide.day}</div>
                <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>{guide.title}</div>
              </div>
            </div>

            {/* Steps */}
            <div style={{ padding: '16px 20px' }}>
              {guide.steps.map(step => (
                <div key={step.step} style={{
                  display: 'flex',
                  gap: 12,
                  padding: '10px 0',
                  borderBottom: '1px solid #1e3a5f',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    background: `${guide.color}33`,
                    border: `2px solid ${guide.color}66`,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 900,
                    color: guide.color,
                    flexShrink: 0,
                  }}>
                    {step.step}
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 20 }}>{step.icon}</span>
                    <span style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.6, paddingTop: 2 }}>
                      {step.text}
                    </span>
                  </div>
                </div>
              ))}

              {/* Warning */}
              <div style={{
                marginTop: 14,
                background: '#2a1515',
                border: '1px solid #ef444444',
                borderRadius: 10,
                padding: '10px 14px',
                fontSize: 13,
                color: '#fca5a5',
                display: 'flex',
                gap: 8,
                lineHeight: 1.6,
              }}>
                <span style={{ flexShrink: 0 }}>⚠️</span>
                <span>{guide.warning}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
