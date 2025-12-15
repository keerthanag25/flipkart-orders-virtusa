#Flipkart Orders – Virtusa Mini Project
This is a simple Flipkart‑style “My Orders” web application created for the Virtusa internship/mini‑project.
It lets users view their past orders in a layout similar to Flipkart’s orders page, along with basic tracking and a sample receipt.

Features:
-Flipkart‑like top navbar with a clear My Orders title
-Clean, card‑based order layout with status badges (Delivered, In Transit, Cancelled, Refunded)
-Each order shows product name, price, payment method, order date, and delivery date
-Action buttons for Track Order, Cancel Order, and View Receipt
-Cancel button automatically disabled for delivered or already cancelled orders
-Orders are stored in localStorage, so data stays across page reloads
-Filter tabs to quickly switch between:
  -All Orders
  -Delivered
  -In Transit
  -Cancelled
  -Refunded
  
Separate pages:
  -index.html – Orders list
  -track.html – Order tracking timeline UI
  -receipt.html – Simple payment receipt page
  
Tech Stack:
  -HTML5 for structure
  -CSS3 for styling and layout
  -Vanilla JavaScript for all the logic (no frameworks)
  -localStorage for storing and updating order data on the browser
  -Product images loaded via online image URLs (no local image folder required)
  
How to Run:
  1.Download or clone this repository to your system.
  2.Open the project folder in any code editor or directly in your file explorer.
  3.Open index.html in a web browser (Chrome/Edge/Firefox).
  4.From the orders page you can:
    -Click Track Order to open track.html.
    -Click View Receipt to open receipt.html.
    -Click Cancel Order to update the order status in localStorage in real time.
There is no backend or installation step required – everything runs completely in the browser.

Author
Name:Keerthana.G
GitHub: @keerthanag25
