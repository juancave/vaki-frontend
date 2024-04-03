import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import GroupsPage from './pages/GroupsPage';
import FriendsPage from './pages/FriendPage';
import ExpensesPage from './pages/ExpensesPage';
import HomePage from './pages/HomePage';
import MyAccountPage from './pages/MyAccountPage';

import logo from './assets/logo.svg';
import wwcLogo from './assets/wwc-logo.png';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="flex justify-between items-center bg-vaki-primary text-white  p-4">
        <div>
          <Link className="font-medium hover:underline" to="/">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Vaki Logo" />
              <span>Vaki</span>
            </div>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link className="font-medium hover:underline" to="/friends">
            Friends
          </Link>
          <Link className="font-medium hover:underline" to="/expenses">
            Expenses
          </Link>
          <Link className="font-medium hover:underline" to="/groups">
            Groups
          </Link>
        </div>
        <Link className="font-medium hover:underline" to="/my-account">
          My Account
        </Link>
      </header>
      <main className="mt-4 mb-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
        </Routes>
      </main>
      <footer className="flex justify-center">
        <img src={wwcLogo} alt="WWC Logo" />
      </footer>
    </div>
  );
}

export default App;
