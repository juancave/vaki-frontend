import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import GroupsPage from './pages/GroupsPage';
import FriendsPage from './pages/FriendPage';
import ExpensesPage from './pages/ExpensesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="flex justify-between border-b-2 border-slate-200 p-4">
        <div>
          <Link className="font-medium hover:underline" to="/">
            Vaki APP
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
        <div>My Account</div>
      </header>
      <main className="mt-4 mb-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
        </Routes>
      </main>
      <footer className="flex justify-center">2024 WWC Medellín</footer>
    </div>
  );
}

export default App;
