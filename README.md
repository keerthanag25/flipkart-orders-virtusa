
# Case Study – Flipkart‑Clone “My Orders” Portal

This case study is a Flipkart‑style **“My Orders”** web application.  
It focuses on the post‑purchase experience: viewing previous orders, checking status, tracking delivery, and viewing a simple receipt.

***

## Objective

The goal of this mini project is to recreate the essential parts of an ecommerce orders page that a user sees after placing purchases.  
It demonstrates how to display stored order data, filter it by status, and provide basic actions like tracking and cancelling orders.

***

## Features

- Flipkart‑like top navbar with a prominent **My Orders** title  
- Card‑based layout for each order with shadows and rounded corners  
- Status badges for each order (Delivered, In Transit, Cancelled, Refunded)  
- Product details on every card:
  - Product image, name, price, payment method  
  - Order date and expected/actual delivery date  
- Action buttons:
  - **Track Order** → opens a tracking timeline page  
  - **Cancel Order** → updates the status in real time (where allowed)  
  - **View Receipt** → opens a simple receipt page  
- Cancel button automatically disabled for orders that are already delivered or cancelled  
- Filter tabs to quickly view:
  - All Orders  
  - Delivered  
  - In Transit  
  - Cancelled  
  - Refunded  

***

## Pages

- **`index.html` – Orders List**  
  - Shows all orders loaded from localStorage  
  - Supports status filters and action buttons for each order  

- **`track.html` – Order Tracking**  
  - Visual timeline with steps like Ordered → Packed → Shipped → Delivered  
  - Simple animation to highlight the current step  

- **`receipt.html` – Payment Receipt**  
  - Displays basic order and payment details in a clean invoice‑style layout  

***

## Tech Stack

- **HTML5** – structure of all pages  
- **CSS3** – Flipkart‑style layout, card design, badges, and responsive styling  
- **Vanilla JavaScript** – handling data, filters, button actions, and localStorage  
- **localStorage** – used as a mini database to store demo orders and their updated status  
- Product images loaded using **online image URLs**, so no separate images folder is required

***

## How to Run

1. Download or clone the repository to your system.  
2. Open the project folder in any code editor or directly via file explorer.  
3. Open **`index.html`** in a web browser (Chrome/Edge/Firefox).  
4. From the orders page you can:
   - Click **Track Order** to open the tracking page (`track.html`).  
   - Click **View Receipt** to open the receipt page (`receipt.html`).  
   - Click **Cancel Order** (for eligible orders) to update the status in localStorage immediately.  

No backend, server, or database is required; everything runs completely in the browser.

***

## Author

- **Name:** Keerthana.G 
- **GitHub:** `@keerthanag25`
