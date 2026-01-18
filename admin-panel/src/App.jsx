import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import Malls from './pages/Malls';
import Users from './pages/Users';

// Initial Mock Data
const initialMovies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", status: "Active", rating: 8.8, duration: "148 min" },
  { id: 2, title: "The Dark Knight", genre: "Action", status: "Active", rating: 9.0, duration: "152 min" },
  { id: 3, title: "Interstellar", genre: "Sci-Fi", status: "Coming Soon", rating: 8.6, duration: "169 min" },
  { id: 4, title: "Avengers: Endgame", genre: "Action", status: "Active", rating: 8.4, duration: "181 min" },
  { id: 5, title: "Joker", genre: "Drama", status: "Active", rating: 8.5, duration: "122 min" },
];

const initialMalls = [
  { id: 1, name: "IMAX", location: "Prasad Multiplex, Hyderabad", screens: 5, capacity: 1200 },
  { id: 2, name: "PVR Cinemas", location: "Phoenix Mall, Chennai", screens: 8, capacity: 1800 },
];

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User", joinedDate: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", joinedDate: "2024-02-20" },
  { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin", joinedDate: "2023-12-01" },
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [movies, setMovies] = useState(initialMovies);
  const [malls, setMalls] = useState(initialMalls);
  const [users, setUsers] = useState(initialUsers);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'add' or 'edit'
  const [currentItem, setCurrentItem] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('');

  // CRUD Operations for Movies
  const handleAddMovie = (movieData) => {
    const newMovie = { ...movieData, id: movies.length + 1 };
    setMovies([...movies, newMovie]);
    setShowModal(false);
  };

  const handleEditMovie = (movieData) => {
    setMovies(movies.map(m => m.id === movieData.id ? movieData : m));
    setShowModal(false);
  };

  const handleDeleteMovie = (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      setMovies(movies.filter(m => m.id !== id));
    }
  };

  // CRUD Operations for Malls
  const handleAddMall = (mallData) => {
    const newMall = { ...mallData, id: malls.length + 1 };
    setMalls([...malls, newMall]);
    setShowModal(false);
  };

  const handleEditMall = (mallData) => {
    setMalls(malls.map(m => m.id === mallData.id ? mallData : m));
    setShowModal(false);
  };

  const handleDeleteMall = (id) => {
    if (window.confirm('Are you sure you want to delete this mall?')) {
      setMalls(malls.filter(m => m.id !== id));
    }
  };

  // CRUD Operations for Users
  const handleAddUser = (userData) => {
    const newUser = { ...userData, id: users.length + 1, joinedDate: new Date().toISOString().split('T')[0] };
    setUsers([...users, newUser]);
    setShowModal(false);
  };

  const handleEditUser = (userData) => {
    setUsers(users.map(u => u.id === userData.id ? userData : u));
    setShowModal(false);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  // Modal handlers
  const openAddModal = (category) => {
    setCurrentCategory(category);
    setModalType('add');
    setCurrentItem(null);
    setShowModal(true);
  };

  const openEditModal = (category, item) => {
    setCurrentCategory(category);
    setModalType('edit');
    setCurrentItem(item);
    setShowModal(true);
  };

  const getSaveHandler = () => {
    if (currentCategory === 'movies') {
      return modalType === 'add' ? handleAddMovie : handleEditMovie;
    } else if (currentCategory === 'malls') {
      return modalType === 'add' ? handleAddMall : handleEditMall;
    } else if (currentCategory === 'users') {
      return modalType === 'add' ? handleAddUser : handleEditUser;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard movies={movies} malls={malls} users={users} />;

      case 'movies':
        return (
          <Movies
            movies={movies}
            onAdd={() => openAddModal('movies')}
            onEdit={(movie) => openEditModal('movies', movie)}
            onDelete={handleDeleteMovie}
          />
        );

      case 'malls':
        return (
          <Malls
            malls={malls}
            onAdd={() => openAddModal('malls')}
            onEdit={(mall) => openEditModal('malls', mall)}
            onDelete={handleDeleteMall}
          />
        );

      case 'users':
        return (
          <Users
            users={users}
            onAdd={() => openAddModal('users')}
            onEdit={(user) => openEditModal('users', user)}
            onDelete={handleDeleteUser}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div style={{ marginLeft: '260px', flex: 1, padding: '40px' }}>
        {renderContent()}
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          type={modalType}
          item={currentItem}
          category={currentCategory}
          onClose={() => setShowModal(false)}
          onSave={getSaveHandler()}
        />
      )}
    </div>
  );
}

export default App;
