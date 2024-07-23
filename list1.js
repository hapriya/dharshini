document.getElementById('add').addEventListener('click', function() {
    const category = document.getElementById('cate-list').value;
    const amount = document.getElementById('num').value;
    const date = document.getElementById('date-input').value;

    if (category && amount && !date) {
        const tbody = document.getElementById('expenses-list');
        const row = tbody.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = category;
        cell2.textContent = amount;
        cell3.textContent = date;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            tbody.removeChild(row);
            updateTotal();
        });
        cell4.appendChild(deleteButton);

        updateTotal();
    }
});

function updateTotal() {
    const rows = document.querySelectorAll('#expenses-list tr');
    let total = 0;
    rows.forEach(row => {
        const amount = parseFloat(row.cells[1].textContent);
        if (!isNaN(amount)) {
            total += amount;
        }
    });
    document.getElementById('total-amount').textContent = total.toFixed(3);
}
