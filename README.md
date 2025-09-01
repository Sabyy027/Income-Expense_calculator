# 💰 Income Expense Calculator

A modern, responsive web application for tracking personal finances with a clean, professional interface. Built with vanilla JavaScript and styled with Tailwind CSS.

## 🚀 Features

### 📊 **Financial Dashboard**
- **Real-time Calculations**: Automatic calculation of total income, expenses, and net balance
- **Visual Summary**: Color-coded cards for easy financial overview
- **Currency Formatting**: Indian Rupee (₹) formatting with proper number formatting

### 💼 **Transaction Management**
- **Add Transactions**: Simple form to add income or expense entries
- **Edit Transactions**: Click-to-edit functionality for existing transactions
- **Delete Transactions**: One-click deletion with confirmation
- **Persistent Storage**: All data stored via MockAPI for persistence across sessions

### 🔍 **Advanced Filtering**
- **Filter by Type**: View all transactions, income only, or expenses only
- **Real-time Updates**: Instant filtering without page refresh
- **Smart Totals**: Totals always reflect all transactions, regardless of current filter

### 🎨 **Modern UI/UX**
- **Two-Column Layout**: Calculator on the left, transaction history on the right
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Styling**: Clean shadows, gradients, and hover effects
- **Custom Typography**: Lexend Deca font for better readability
- **SVG Icons**: Scalable vector icons instead of emojis for professional appearance

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Fonts**: Google Fonts (Lexend Deca)
- **API**: MockAPI for data persistence
- **Design**: Responsive grid layout with Flexbox

## 📁 Project Structure

```
Income-Expense-Calculator/
│
├── index.html          # Main HTML file with UI structure
├── script.js           # JavaScript functionality and API integration
└── README.md          # Project documentation
```

## 🔧 API Integration

The application uses MockAPI (mockapi.io) for data persistence:

- **Base URL**: `https://68b582dee5dc090291af483c.mockapi.io/transactions`
- **Methods Used**: GET, POST, DELETE
- **Data Format**: JSON with fields for description, amount, type, and createdAt

### API Endpoints
- `GET /transactions` - Fetch all transactions
- `POST /transactions` - Create new transaction
- `DELETE /transactions/:id` - Delete specific transaction


