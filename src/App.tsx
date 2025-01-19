import { useState } from 'react';
import {
  Home,
  Search,
  User,
  Grid2X2,
  Plus,
  MessageCircle,
  Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import WhatsAppDemo from './pages/WhatsAppDemo';
import TelegramDemo from './pages/TelegramDemo';
import InstagramDemo from './pages/InstagramDemo';
import MessengerDemo from './pages/MessengerDemo';

const socialApps = [
  {
    id: 1,
    name: 'WhatsApp',
    image: '/src/img/whatsapp.png',
    component: WhatsAppDemo,
  },
  {
    id: 2,
    name: 'Telegram',
    image: '/src/img/telegram.png',
    component: TelegramDemo,
  },
  {
    id: 3,
    name: 'Instagram',
    image: '/src/img/insta.png',
    component: InstagramDemo,
  },
  {
    id: 4,
    name: 'Messenger',
    image: '/src/img/messenger.png',
    component: MessengerDemo,
  },
];

function ServerIcon({
  image,
  active,
  onClick,
}: {
  image?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div className={cn('server-icon', active && 'active')} onClick={onClick}>
      {image ? (
        <img src={image} alt="app" className="w-8 h-8" />
      ) : (
        <Plus className="w-6 h-6 text-green-500" />
      )}
    </div>
  );
}

function NavIcon({
  icon,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className={cn('nav-icon', active && 'active')} onClick={onClick}>
      {icon}
      {active && <div className="nav-notch" />}
    </button>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [activeApp, setActiveApp] = useState<number | null>(null);

  const handleAppClick = (appId: number) => {
    const app = socialApps.find((a) => a.id === appId);
    if (app?.component) {
      window.open(app.component, '_blank');
    } else {
      setActiveApp(appId);
    }
  };

  const renderContent = () => {
    const app = socialApps.find((a) => a.id === activeApp);
    if (app?.component) {
      const Component = app.component;
      return <Component />;
    }
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select an app to launch
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <ServerIcon
          image="/src/img/home.png"
          active={!activeApp}
          onClick={() => setActiveApp(null)}
        />
        <div className="sidebar-divider" />
        {socialApps.map((app) => (
          <ServerIcon
            key={app.id}
            image={app.image}
            active={activeApp === app.id}
            onClick={() => handleAppClick(app.id)}
          />
        ))}
        <ServerIcon />
      </div>

      <div className="main-content">{renderContent()}</div>

      <nav className="bottom-nav">
        <NavIcon
          icon={<Home size={24} />}
          active={activeNav === 'home'}
          onClick={() => setActiveNav('home')}
        />
        <NavIcon
          icon={<Search size={24} />}
          active={activeNav === 'search'}
          onClick={() => setActiveNav('search')}
        />
        <NavIcon
          icon={<User size={24} />}
          active={activeNav === 'user'}
          onClick={() => setActiveNav('user')}
        />
        <NavIcon
          icon={<Grid2X2 size={24} />}
          active={activeNav === 'grid'}
          onClick={() => setActiveNav('grid')}
        />
      </nav>
    </div>
  );
}
