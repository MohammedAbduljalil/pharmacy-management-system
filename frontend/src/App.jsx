import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Medicines from './pages/Medicines'
import Sales from './pages/Sales'
import Inventory from './pages/Inventory'
import Prescriptions from './pages/Prescriptions'
import Suppliers from './pages/Suppliers'
import Reports from './pages/Reports'
import Users from './pages/Users'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App
