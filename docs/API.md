# API Documentation

## Base URL
```
http://localhost:8080/api
```

## Health Check
```
GET http://localhost:8080/health
```

## Authentication Endpoints

### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@pharmacy.com",
  "password": "password123",
  "role": "pharmacist"
}
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@pharmacy.com",
  "password": "password123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@pharmacy.com",
    "role": "pharmacist"
  }
}
```

## Medicines Endpoints

### Get All Medicines
```http
GET /medicines
Authorization: Bearer <token>
```

### Get Medicine by ID
```http
GET /medicines/:id
Authorization: Bearer <token>
```

### Create Medicine
```http
POST /medicines
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Aspirin",
  "generic_name": "Acetylsalicylic Acid",
  "dosage": "500mg",
  "manufacturer": "PharmaCorp",
  "price": 5.99,
  "cost": 2.50,
  "quantity": 100,
  "reorder_level": 20,
  "expiry_date": "2025-12-31"
}
```

### Update Medicine
```http
PUT /medicines/:id
Authorization: Bearer <token>
Content-Type: application/json
```

### Delete Medicine
```http
DELETE /medicines/:id
Authorization: Bearer <token>
```

## Sales Endpoints

### Create Sale
```http
POST /sales
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    { "medicine_id": 1, "quantity": 2 },
    { "medicine_id": 3, "quantity": 1 }
  ],
  "customer_name": "Jane Doe",
  "customer_phone": "555-1234",
  "payment_method": "cash"
}
```

### Get All Sales
```http
GET /sales
Authorization: Bearer <token>
```

### Get Sale by ID
```http
GET /sales/:id
Authorization: Bearer <token>
```

## Inventory Endpoints

### Get Inventory Status
```http
GET /inventory
Authorization: Bearer <token>
```

### Get Low Stock Items
```http
GET /inventory/low-stock
Authorization: Bearer <token>
```

### Get Expiry Alerts
```http
GET /inventory/expiry-alerts
Authorization: Bearer <token>
```

## Dashboard Endpoints

### Get Dashboard Summary
```http
GET /dashboard/summary
Authorization: Bearer <token>

Response:
{
  "total_sales_today": 5000,
  "total_revenue": 15000,
  "total_medicines": 150,
  "low_stock_count": 5
}
```

### Get Sales Today
```http
GET /dashboard/sales-today
Authorization: Bearer <token>
```

### Get Revenue Metrics
```http
GET /dashboard/revenue
Authorization: Bearer <token>
```

## Prescriptions Endpoints

### Get All Prescriptions
```http
GET /prescriptions
Authorization: Bearer <token>
```

### Create Prescription
```http
POST /prescriptions
Authorization: Bearer <token>
Content-Type: application/json

{
  "patient_name": "John Smith",
  "patient_phone": "555-5678",
  "patient_age": 45,
  "doctor_name": "Dr. Johnson",
  "medicine_id": 1,
  "quantity": 1,
  "dosage": "1 tablet daily",
  "duration": "7 days",
  "instructions": "Take with food"
}
```

## Suppliers Endpoints

### Get All Suppliers
```http
GET /suppliers
Authorization: Bearer <token>
```

### Create Supplier
```http
POST /suppliers
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "PharmaCorp",
  "contact_person": "John Smith",
  "email": "supplier@pharmacorp.com",
  "phone": "555-0123",
  "address": "123 Pharma St",
  "city": "New York",
  "state": "NY",
  "postal_code": "10001",
  "country": "USA"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "message": "Validation error",
  "details": {...}
}
```

### 401 Unauthorized
```json
{
  "message": "Invalid or expired token"
}
```

### 403 Forbidden
```json
{
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Internal server error"
}
```
