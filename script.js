// Sample order data with ONLINE image URLs
const sampleOrders = [
    {
        id: 'FK123456789',
        product: 'iPhone 15 Pro 256GB',
        image: 'https://iclusters.in/cdn/shop/files/0bd5056e-ee45-408b-8827-929f7bad1375_6ef5f548-0378-4dc4-aafc-0a88156e09de.png?v=1758610187',
        price: 89999,
        status: 'in-transit', // matches "In Transit" tab
        payment: 'UPI (PhonePe)',
        orderedDate: 'Dec 10, 2025',
        deliveryDate: 'Dec 14, 2025',
        canCancel: true
    },
    {
        id: 'FK987654321',
        product: 'HP Laptop 14\" Ryzen 5',
        image: 'https://static.digit.in/NPN_hp-notebook-14-dk0093au-7qz52pa-laptop-ryzen-5-quad-core-8gb-1tb-256gb-ssd-win10-1752535606.webp?tr=w-1200',
        price: 112999,
        status: 'delivered',
        payment: 'Credit Card',
        orderedDate: 'Dec 5, 2025',
        deliveryDate: 'Dec 12, 2025',
        canCancel: false
    },
    {
        id: 'FK456789123',
        product: 'Nike Sports Shoes',
        image: 'https://m.media-amazon.com/images/I/71D--klWO-L._AC_UY1000_.jpg',
        price: 12999,
        status: 'cancelled',
        payment: 'Debit Card',
        orderedDate: 'Dec 8, 2025',
        deliveryDate: 'Dec 13, 2025',
        canCancel: false
    },
    {
        id: 'FK321654987',
        product: 'Sony Over‑Ear Headphones',
        image: 'https://images.jdmagicbox.com/quickquotes/images_main/sony_over_the_ear_wired_headphone_pink_mdr_100aap_p__11673322_0.jpg',
        price: 34999,
        status: 'delivered',
        payment: 'UPI (Google Pay)',
        orderedDate: 'Dec 9, 2025',
        deliveryDate: 'Dec 13, 2025',
        canCancel: false
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    initializeOrders();
    setupEventListeners();
    // default filter is "all"
    const orders = JSON.parse(localStorage.getItem('flipkartOrders') || '[]');
    renderOrders(orders);
});

// Initialize orders in localStorage only once
function initializeOrders() {
    if (!localStorage.getItem('flipkartOrders')) {
        localStorage.setItem('flipkartOrders', JSON.stringify(sampleOrders));
    }
}

// Setup event listeners for filter tabs
function setupEventListeners() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function () {
            const status = this.dataset.status;
            filterOrders(status);
        });
    });
}

// Filter orders based on status
function filterOrders(status) {
    // Update active tab style
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-status="${status}"]`).classList.add('active');

    const orders = JSON.parse(localStorage.getItem('flipkartOrders') || '[]');

    let filteredOrders;
    if (status === 'all') {
        filteredOrders = orders;
    } else {
        filteredOrders = orders.filter(order => order.status === status);
    }

    renderOrders(filteredOrders);
}

// Render list of orders into the container
function renderOrders(orders) {
    const container = document.getElementById('ordersContainer');
    container.innerHTML = '';

    if (!orders || orders.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No orders found</p>';
        return;
    }

    orders.forEach(order => {
        const card = createOrderCard(order);
        container.appendChild(card);
    });
}

// Create a single order card element
function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';

    const statusClass = getStatusClass(order.status);
    const cancelDisabled = !order.canCancel ? 'btn-disabled' : '';

    card.innerHTML = `
        <div class="order-header">
            <div>Order ID: ${order.id}</div>
            <div class="status-badge ${statusClass}">
                ${formatStatusText(order.status)}
            </div>
        </div>
        <div class="order-content">
            <img src="${order.image}" alt="${order.product}" class="product-image">
            <div class="product-details">
                <h3>${order.product}</h3>
                <div class="product-price">₹${order.price.toLocaleString()}</div>
                <div>Payment: ${order.payment}</div>
                <div class="order-dates">
                    Ordered: ${order.orderedDate} | Delivery: ${order.deliveryDate}
                </div>
            </div>
            <div class="order-actions">
                <button class="action-btn btn-primary" onclick="trackOrder('${order.id}')">
                    Track Order
                </button>
                <button
                    class="action-btn btn-secondary ${cancelDisabled}"
                    onclick="cancelOrder('${order.id}')"
                    ${!order.canCancel ? 'disabled' : ''}>
                    ${order.status === 'cancelled' ? 'Cancelled' : 'Cancel Order'}
                </button>
                <button class="action-btn btn-primary" onclick="viewReceipt('${order.id}')">
                    View Receipt
                </button>
            </div>
        </div>
    `;

    return card;
}

// Map status to badge CSS class
function getStatusClass(status) {
    switch (status) {
        case 'delivered':
            return 'status-delivered';
        case 'in-transit':
            return 'status-in-transit';
        case 'cancelled':
            return 'status-cancelled';
        case 'refunded':
            return 'status-refunded';
        default:
            return '';
    }
}

// Nicely formatted status text for badge
function formatStatusText(status) {
    if (status === 'in-transit') return 'IN TRANSIT';
    return status.toUpperCase();
}

// Open tracking page in new tab
function trackOrder(orderId) {
    // You can pass orderId via query string later if you want dynamic tracking
    window.open('track.html', '_blank');
}

// Cancel order and update localStorage + UI
function cancelOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('flipkartOrders') || '[]');
    const order = orders.find(o => o.id === orderId);

    if (order && order.canCancel && order.status !== 'delivered' && order.status !== 'cancelled') {
        order.status = 'cancelled';
        order.canCancel = false;
        localStorage.setItem('flipkartOrders', JSON.stringify(orders));

        // Re-render using current filter
        const currentFilter = getCurrentFilter();
        filterOrders(currentFilter);
    }
}

// Open receipt page in new tab
function viewReceipt(orderId) {
    // You can later pass orderId in URL to customize the receipt
    window.open('receipt.html', '_blank');
}

// Get current active filter from the tabs
function getCurrentFilter() {
    const activeTab = document.querySelector('.tab.active');
    return activeTab ? activeTab.dataset.status : 'all';
}
