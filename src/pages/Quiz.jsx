import { useState } from 'react';
import { quizQuestions } from '../data/content';

const TOTAL = quizQuestions.length;

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const q = quizQuestions[current];

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === q.answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= TOTAL) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowResult(false);
  };

  if (finished) {
    const pct = Math.round((score / TOTAL) * 100);
    const medal = pct >= 90 ? '🏆' : pct >= 70 ? '🥇' : pct >= 50 ? '🥈' : '🥉';
    const msg = pct >= 90 ? '완벽해요! 마인크래프트 마스터!' :
                pct >= 70 ? '잘했어요! 조금만 더 연습해요!' :
                pct >= 50 ? '괜찮아요! 다시 도전해봐요!' :
                '조금 더 공부하고 다시 해봐요!';

    return (
      <div style={{ padding: '20px 16px 100px' }}>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: '#fbbf24' }}>🧩 퀴즈 결과</h2>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #1e2d40, #1a2535)',
          border: '2px solid #fbbf2444',
          borderRadius: 24,
          padding: 32,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 80 }}>{medal}</div>
          <div style={{ fontSize: 48, fontWeight: 900, color: '#fbbf24', marginTop: 16 }}>
            {score} / {TOTAL}
          </div>
          <div style={{ fontSize: 20, color: '#e2e8f0', marginTop: 8 }}>{pct}점</div>
          <p style={{ fontSize: 16, color: '#94a3b8', marginTop: 16, lineHeight: 1.6 }}>{msg}</p>

          {/* Score bar */}
          <div style={{
            background: '#0d1b2a', borderRadius: 99, height: 12, marginTop: 24, overflow: 'hidden',
          }}>
            <div style={{
              width: `${pct}%`, height: '100%',
              background: pct >= 70 ? '#4ade80' : '#f59e0b',
              borderRadius: 99,
              transition: 'width 0.8s ease',
            }} />
          </div>

          <button
            onClick={handleRestart}
            style={{
              marginTop: 32,
              background: '#fbbf24',
              border: 'none',
              borderRadius: 14,
              padding: '14px 40px',
              fontSize: 16,
              fontWeight: 900,
              color: '#000',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            🔄 다시 풀기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: '#fbbf24' }}>🧩 마인크래프트 퀴즈</h2>
        <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>얼마나 알고 있는지 확인해봐요!</p>
      </div>

      {/* Progress */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, color: '#6b7280' }}>
          <span>문제 {current + 1} / {TOTAL}</span>
          <span style={{ color: '#4ade80' }}>점수: {score}</span>
        </div>
        <div style={{ background: '#0d1b2a', borderRadius: 99, height: 8, overflow: 'hidden' }}>
          <div style={{
            width: `${((current) / TOTAL) * 100}%`,
            height: '100%',
            background: '#fbbf24',
            borderRadius: 99,
            transition: 'width 0.3s',
          }} />
        </div>
      </div>

      {/* Question card */}
      <div style={{
        background: '#1e2d40',
        border: '2px solid #fbbf2444',
        borderRadius: 20,
        padding: 24,
        marginBottom: 16,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 52 }}>{q.emoji}</div>
        <p style={{ fontSize: 18, fontWeight: 700, color: '#e2e8f0', marginTop: 16, lineHeight: 1.6 }}>
          {q.question}
        </p>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {q.options.map((opt, idx) => {
          const isCorrect = idx === q.answer;
          const isSelected = idx === selected;
          let bg = '#1e2d40';
          let border = '2px solid #2d3748';
          let color = '#e2e8f0';

          if (showResult) {
            if (isCorrect) { bg = '#0f2a1a'; border = '2px solid #4ade80'; color = '#4ade80'; }
            else if (isSelected && !isCorrect) { bg = '#2a1515'; border = '2px solid #ef4444'; color = '#fca5a5'; }
          } else if (isSelected) {
            bg = '#1a2a3a'; border = '2px solid #fbbf24';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              style={{
                background: bg, border, borderRadius: 14,
                padding: '16px 20px', textAlign: 'left',
                cursor: selected !== null ? 'default' : 'pointer',
                color, fontSize: 15, fontWeight: isSelected || (showResult && isCorrect) ? 700 : 400,
                display: 'flex', gap: 12, alignItems: 'center',
                transition: 'all 0.2s',
              }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: 8,
                background: showResult && isCorrect ? '#4ade8033' : '#0d1b2a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700, color: '#94a3b8', flexShrink: 0,
              }}>
                {showResult && isCorrect ? '✓' : showResult && isSelected ? '✗' : ['A','B','C','D'][idx]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div style={{
          background: selected === q.answer ? '#0f2a1a' : '#2a1515',
          border: `2px solid ${selected === q.answer ? '#4ade8044' : '#ef444444'}`,
          borderRadius: 14,
          padding: '14px 16px',
          marginBottom: 16,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6,
            color: selected === q.answer ? '#4ade80' : '#f87171' }}>
            {selected === q.answer ? '🎉 정답이에요!' : '😢 틀렸어요!'}
          </div>
          <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6 }}>💡 {q.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <button
          onClick={handleNext}
          style={{
            width: '100%',
            background: '#fbbf24',
            border: 'none',
            borderRadius: 14,
            padding: '16px',
            fontSize: 16,
            fontWeight: 900,
            color: '#000',
            cursor: 'pointer',
          }}
        >
          {current + 1 >= TOTAL ? '🏆 결과 보기' : '다음 문제 →'}
        </button>
      )}
    </div>
  );
}
