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

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources and API)

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Start Using** the calculator immediately!

### Usage

1. **Add a Transaction**:
   - Enter a description for your transaction
   - Input the amount
   - Select whether it's income or expense
   - Click "Add Transaction"

2. **View Your Finances**:
   - See your total income, expenses, and balance at the top
   - View all transactions in the history panel
   - Use filters to view specific transaction types

3. **Manage Transactions**:
   - Click the edit icon (✏️) to modify a transaction
   - Click the delete icon (🗑️) to remove a transaction

## 🎯 Key Features Explained

### Dashboard Cards
The top section displays three important metrics:
- **Income**: Total of all income transactions (Green)
- **Expense**: Total of all expense transactions (Red)  
- **Balance**: Net amount (Income - Expense) (Blue)

### Transaction Form
- **Description Field**: Add meaningful descriptions for better tracking
- **Amount Field**: Numeric input with rupee formatting
- **Type Selection**: Radio buttons for income/expense selection
- **Action Buttons**: Add transaction or reset form

### Transaction History
- **Chronological Order**: Latest transactions appear first
- **Rich Display**: Shows description, amount, date, and type
- **Quick Actions**: Edit and delete buttons for each transaction
- **Filter Options**: Toggle between All, Income, and Expense views

### Responsive Design
- **Desktop**: Two-column layout for optimal space usage
- **Tablet**: Responsive grid that adapts to screen size
- **Mobile**: Single-column stack for better mobile experience

## 🎨 Design Philosophy

### Color Scheme
- **Green**: Represents income and positive financial actions
- **Red**: Represents expenses and outgoing money
- **Blue**: Represents balance and neutral financial information
- **Gray**: Used for UI elements and secondary information

### Typography
- **Lexend Deca**: Chosen for its excellent readability and modern appearance
- **Weight Variations**: Multiple font weights for proper hierarchy
- **Responsive Sizing**: Text scales appropriately across devices

### User Experience
- **Intuitive Interface**: Clear visual hierarchy and logical flow
- **Immediate Feedback**: Real-time updates and hover effects
- **Error Prevention**: Form validation and user-friendly error handling
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🔧 API Integration

The application uses MockAPI (mockapi.io) for data persistence:

- **Base URL**: `https://68b582dee5dc090291af483c.mockapi.io/transactions`
- **Methods Used**: GET, POST, DELETE
- **Data Format**: JSON with fields for description, amount, type, and createdAt

### API Endpoints
- `GET /transactions` - Fetch all transactions
- `POST /transactions` - Create new transaction
- `DELETE /transactions/:id` - Delete specific transaction


