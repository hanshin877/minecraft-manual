import { useState } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Controls from './pages/Controls';
import Items from './pages/Items';
import Recipes from './pages/Recipes';
import Monsters from './pages/Monsters';
import Survival from './pages/Survival';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Quiz from './pages/Quiz';
import Community from './pages/Community';
import { useFavorites } from './hooks/useFavorites';

const contentPages = ['controls', 'items', 'recipes', 'monsters', 'survival'];

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [contentPage, setContentPage] = useState(null);
  const { favorites, toggle, isFav } = useFavorites();

  const navigate = (page) => {
    if (contentPages.includes(page)) {
      setContentPage(page);
    } else {
      setActivePage(page);
      setContentPage(null);
    }
  };

  const favProps = { isFav, onToggleFav: toggle };

  const renderContent = () => {
    if (contentPage) {
      const pages = {
        controls: <Controls {...favProps} />,
        items: <Items {...favProps} />,
        recipes: <Recipes {...favProps} />,
        monsters: <Monsters {...favProps} />,
        survival: <Survival />,
      };
      return (
        <div>
          <button
            onClick={() => setContentPage(null)}
            style={{
              position: 'sticky', top: 0, zIndex: 50,
              width: '100%', background: '#0d1b2a',
              border: 'none', borderBottom: '2px solid #1e3a5f',
              padding: '12px 16px', color: '#4ade80',
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
              textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8,
            }}
          >
            ‹ 홈으로 돌아가기
          </button>
          {pages[contentPage]}
        </div>
      );
    }

    switch (activePage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'search': return <Search onNavigate={navigate} />;
      case 'favorites': return <Favorites favorites={favorites} onToggle={toggle} onNavigate={navigate} />;
      case 'quiz': return <Quiz />;
      case 'community': return <Community />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', overflowY: 'auto', paddingBottom: 70 }}>
      {renderContent()}
      <BottomNav
        active={contentPage ? null : activePage}
        onChange={navigate}
        favCount={favorites.length}
      />
    </div>
  );
}
