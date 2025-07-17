document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');

    let expense = JSON.parse(localStorage.getItem('expense')) || [];

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name,
                amount,
            };
            expense.push(newExpense);
            saveExpenseToLocal();
            updateTotal();
            renderExpense();
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    });

    function saveExpenseToLocal() {
        localStorage.setItem('expense', JSON.stringify(expense));
    }

    function calculateTotal() {
        return expense.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function updateTotal() {
        const totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    function renderExpense() {
        expenseList.innerHTML = "";
        expense.forEach(exp => {
            const li = document.createElement('li');
            li.innerHTML = `${exp.name} - $${exp.amount.toFixed(2)} 
                <button data-id="${exp.id}">Delete</button>`;
            expenseList.appendChild(li);
        });
    }

    expenseList.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const expenseId = parseInt(e.target.getAttribute('data-id'));
            expense = expense.filter(exp => exp.id !== expenseId);
            saveExpenseToLocal();
            renderExpense();
            updateTotal();
        }
    });

    renderExpense();
    updateTotal();
});
