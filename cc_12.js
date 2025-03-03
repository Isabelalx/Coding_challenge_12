// Task 1 
// Creating a revenue card 

const dashboardId = document.getElementById("dashboard"); 
const dashboardQuery = document.querySelector("#dashboard");

const revenueCard = document.createElement("div"); // Creating a new metric card

revenueCard.setAttribute("class", "metric-card"); // Added class 
revenueCard.setAttribute("id", "revenue-card"); // Added Id 

revenueCard.innerHTML = `
<h3>Revenue</h3>
<p>$ 0 </p>
`; 

dashboardId.appendChild(revenueCard); 
