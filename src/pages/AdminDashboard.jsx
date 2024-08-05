import { useState } from 'react';
import Header from '../components/admin/Header';
import Sidebar from '../components/admin/Sidebar';
import Home from '../components/admin/Home';
import './AdminDashboard.css'; 

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
}

export default AdminDashboard;

