# 🏥 Pharmacy Management System

A comprehensive full-stack pharmacy management system built with Node.js, Express, React, and PostgreSQL.

## ✨ Features

### Core Functionality
- **Inventory Management** - Track medicines, stock levels, dosage, and expiry dates
- **Point of Sale (POS)** - Fast and efficient customer checkout
- **Prescription Management** - Link prescriptions to sales with patient records
- **User Management** - Role-based access control (Admin, Pharmacist, Staff)
- **Supplier Management** - Track orders, deliveries, and supplier details
- **Financial Dashboard** - Real-time revenue, profits, and sales analytics
- **Reports** - Sales, inventory, expiry alerts, and more
- **Authentication** - Secure JWT-based authentication
- **Low Stock Alerts** - Automatic notifications for low inventory
- **Expiry Tracking** - Alert system for medicines about to expire

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Validation**: Joi
- **Security**: bcrypt, helmet, cors

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **State Management**: Redux Toolkit

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- PostgreSQL 12+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/MohammedAbduljalil/pharmacy-management-system.git
cd pharmacy-management-system

# Install backend
cd backend
npm install
cp .env.example .env

# Install frontend
cd ../frontend
npm install
cp .env.example .env

cd ..
```

### Running the Application

```bash
# Terminal 1 - Start Backend (Port 8080)
cd backend
npm start

# Terminal 2 - Start Frontend (Port 8081)
cd frontend
npm run dev
```

### Access Points
- **Frontend**: http://localhost:8081
- **Backend API**: http://localhost:8080/api
- **Health Check**: http://localhost:8080/health

## 🔐 User Roles

- **Admin**: Full system access, user management
- **Pharmacist**: Sales, inventory, prescriptions
- **Staff**: Sales and limited inventory view
- **Manager**: Reports and analytics

## 📊 Database Schema

See `database/schema.sql` for complete database structure.

## 📝 Environment Variables

See `.env.example` files in backend and frontend directories.

## 🤝 Contributing

Contributions are welcome!

## 📄 License

MIT License

## 📧 Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/MohammedAbduljalil/pharmacy-management-system/issues)

## 🙏 Acknowledgments

Built with ❤️ by Mohammed Abduljalil
