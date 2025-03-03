// Task 1 
// Creating a revenue card 

// Task 1 
// Creating a revenue card 

const dashboardId = document.getElementById("dashboard"); 
const dashboardQuery = document.querySelector("#dashboard");

// Creating metric cards
const revenueCard = document.createElement("div"); 
const profitCard = document.createElement("div"); 
const expenseCard = document.createElement("div"); 

// Setting attributes for Revenue Card
revenueCard.setAttribute("class", "metric-card"); 
revenueCard.setAttribute("id", "revenue-card"); 
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$ 0</p>
`; 

// Setting attributes for Profit Card
profitCard.setAttribute("class", "metric-card"); 
profitCard.setAttribute("id", "profit-card"); 
profitCard.innerHTML = `
    <h3>Profit</h3>
    <p>$ 0</p>
`; 

// Setting attributes for Expense Card
expenseCard.setAttribute("class", "metric-card"); 
expenseCard.setAttribute("id", "expense-card"); 
expenseCard.innerHTML = `
    <h3>Expenses</h3>
    <p>$ 0</p>
`; 

// Appending cards to the dashboard
dashboardId.appendChild(revenueCard); 
dashboardId.appendChild(profitCard);
dashboardId.appendChild(expenseCard);


