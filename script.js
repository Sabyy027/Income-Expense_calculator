const API_URL = "https://68b582dee5dc090291af483c.mockapi.io/transactions";

const form = document.getElementById("transaction-form");
const list = document.getElementById("transaction-list");
const totalIncomeEl = document.getElementById("total-income");
const totalExpenseEl = document.getElementById("total-expense");
const netBalanceEl = document.getElementById("net-balance");
const filterRadios = document.querySelectorAll("input[name='filter']");

let transactions = [];

// Initialize filter button styling
function initializeFilterButtons() {
  filterRadios.forEach(radio => {
    const label = radio.parentElement;
    const btn = label.querySelector('.filter-btn');
    
    radio.addEventListener('change', () => {
      // Reset all buttons
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.className = 'filter-btn text-center py-2 px-4 rounded-lg cursor-pointer transition-all duration-200 font-medium text-gray-600 hover:text-gray-800';
      });
      
      // Style active button
      if (radio.checked) {
        btn.className = 'filter-btn text-center py-2 px-4 rounded-lg cursor-pointer transition-all duration-200 font-medium bg-blue-600 text-white shadow-md';
      }
    });
  });
  
  // Set initial active state
  const checkedRadio = document.querySelector("input[name='filter']:checked");
  if (checkedRadio) {
    const btn = checkedRadio.parentElement.querySelector('.filter-btn');
    btn.className = 'filter-btn text-center py-2 px-4 rounded-lg cursor-pointer transition-all duration-200 font-medium bg-blue-600 text-white shadow-md';
  }
}

// Fetch transactions
async function fetchTransactions() {
  try {
    const res = await fetch(API_URL);
    transactions = await res.json();

    // Sort transactions by date (latest first)
    transactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    renderTransactions();
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
}

// Add transaction
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const description = document.getElementById("description").value;
  const amount = +document.getElementById("amount").value;
  const type = form.querySelector("input[name='type']:checked").value;

  const newTransaction = { description, amount, type, createdAt: new Date() };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    });

    const data = await res.json();
    transactions.unshift(data); // Add to beginning for latest first
    renderTransactions();
    form.reset();
  } catch (error) {
    console.error('Error adding transaction:', error);
  }
});

// Render transactions
function renderTransactions() {
  list.innerHTML = "";
  let filter = document.querySelector("input[name='filter']:checked").value;
  let filtered = filter === "all" ? transactions : transactions.filter(t => t.type === filter);

  // Calculate totals from all transactions, not just filtered ones
  let income = 0, expense = 0;
  transactions.forEach((t) => {
    if (t.type === "income") income += +t.amount;
    else expense += +t.amount;
  });

  // Update totals display
  totalIncomeEl.textContent = income.toLocaleString();
  totalExpenseEl.textContent = expense.toLocaleString();
  netBalanceEl.textContent = (income - expense).toLocaleString();

  // Render filtered transactions
  if (filtered.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "text-center py-8 text-gray-500";
    emptyState.innerHTML = `
      <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <p class="text-lg font-medium">No transactions found</p>
      <p class="text-sm">Add your first transaction to get started</p>
    `;
    list.appendChild(emptyState);
    return;
  }

  filtered.forEach((t) => {
    const date = new Date(t.createdAt).toLocaleDateString("en-GB", {
      day: "2-digit", month: "short", year: "numeric"
    });

    const li = document.createElement("li");
    li.className = "bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200 border border-gray-100";
    
    const typeColor = t.type === "income" ? "text-green-600" : "text-red-600";
    const typeIcon = t.type === "income" 
      ? `<svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
         </svg>`
      : `<svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
         </svg>`;

    li.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            ${typeIcon}
            <span class="font-semibold text-gray-800">${t.description}</span>
          </div>
          <div class="flex items-center gap-4 text-sm text-gray-600">
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v16C2 20.33 2.67 21 3.5 21h17c.83 0 1.5-.67 1.5-1.5v-16C22 2.67 21.33 2 20.5 2z"/>
              </svg>
              <span>${date}</span>
            </div>
            <span class="px-2 py-1 rounded-full text-xs font-medium ${t.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">${t.type}</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-right">
            <div class="font-bold text-lg ${typeColor}">₹${(+t.amount).toLocaleString()}</div>
          </div>
          <div class="flex gap-2">
            <button onclick="editTransaction('${t.id}')" class="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200" title="Edit transaction">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </button>
            <button onclick="deleteTransaction('${t.id}')" class="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200" title="Delete transaction">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>`;
    list.appendChild(li);
  });
}

// Delete transaction
async function deleteTransaction(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    transactions = transactions.filter((t) => t.id !== id);
    renderTransactions();
  } catch (error) {
    console.error('Error deleting transaction:', error);
  }
}

// Edit transaction
async function editTransaction(id) {
  const transaction = transactions.find((t) => t.id === id);
  if (!transaction) return;
  
  document.getElementById("description").value = transaction.description;
  document.getElementById("amount").value = transaction.amount;
  form.querySelector(`input[value=${transaction.type}]`).checked = true;

  // Remove old entry; user will submit updated version
  await deleteTransaction(id);
}

// Filters
filterRadios.forEach(r => r.addEventListener("change", renderTransactions));

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  initializeFilterButtons();
  fetchTransactions();
});

// Initialize on page load if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeFilterButtons();
    fetchTransactions();
  });
} else {
  initializeFilterButtons();
  fetchTransactions();
}
