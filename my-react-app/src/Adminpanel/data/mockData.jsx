export const dashboardStats = {
  totalOrders: {
    value: '₹26,500',
    count: 89,
    change: 34.7,
    compareText: 'Compared to Oct 2023'
  },
  activeOrders: {
    value: '₹126,500',
    change: 34.7,
    compareText: 'Compared to Oct 2023'
  },
  completedOrders: {
    value: '₹126,500',
    change: 34.7,
    compareText: 'Compared to Oct 2023'
  },
  returnOrders: {
    value: '₹126,500',
    change: 34.7,
    compareText: 'Compared to Oct 2023'
  }
}
 
export const salesData = {
  monthly: [
    { month: 'JUL', value: 500 },
    { month: 'AUG', value: 800 },
    { month: 'SEP', value: 600 },
    { month: 'OCT', value: 1200 },
    { month: 'NOV', value: 2000 },
    { month: 'DEC', value: 3500 }
  ],
  yearly: [
    { month: 'JAN', value: 1500 },
    { month: 'FEB', value: 1800 },
    { month: 'MAR', value: 2200 },
    { month: 'APR', value: 1900 },
    { month: 'MAY', value: 2500 },
    { month: 'JUN', value: 2800 },
    { month: 'JUL', value: 2400 },
    { month: 'AUG', value: 3000 },
    { month: 'SEP', value: 2700 },
    { month: 'OCT', value: 3200 },
    { month: 'NOV', value: 3800 },
    { month: 'DEC', value: 4200 }
  ]
}
 
export const bestSellers = [
  { id: 1, name: 'Lorem Ipsum', price: '₹126.50', sales: '999 sales' },
  { id: 2, name: 'Lorem Ipsum', price: '₹126.50', sales: '126,500' },
  { id: 3, name: 'Lorem Ipsum', price: '₹126.50', sales: '999 sales' }
]
 
export const recentOrders = [
  {
    id: '#25426',
    product: 'Lorem Ipsum',
    date: 'Nov 8th, 2023',
    customer: 'Kevin',
    customerAvatar: 'K',
    status: 'Delivered',
    amount: '₹200.00'
  },
  {
    id: '#25425',
    product: 'Lorem Ipsum',
    date: 'Nov 7th, 2023',
    customer: 'Komal',
    customerAvatar: 'K',
    status: 'Canceled',
    amount: '₹200.00'
  },
  {
    id: '#25424',
    product: 'Lorem Ipsum',
    date: 'Nov 6th, 2023',
    customer: 'Nikhil',
    customerAvatar: 'N',
    status: 'Delivered',
    amount: '₹200.00'
  },
  {
    id: '#25423',
    product: 'Lorem Ipsum',
    date: 'Nov 5th, 2023',
    customer: 'Shivam',
    customerAvatar: 'S',
    status: 'Canceled',
    amount: '₹200.00'
  },
  {
    id: '#25422',
    product: 'Lorem Ipsum',
    date: 'Nov 4th, 2023',
    customer: 'Shadab',
    customerAvatar: 'S',
    status: 'Delivered',
    amount: '₹200.00'
  },
  {
    id: '#25421',
    product: 'Lorem Ipsum',
    date: 'Nov 2nd, 2023',
    customer: 'Yogesh',
    customerAvatar: 'Y',
    status: 'Delivered',
    amount: '₹200.00'
  }
]
 
export const allOrders = [
  ...recentOrders,
  {
    id: '#25420',
    product: 'Lorem Ipsum',
    date: 'Nov 1st, 2023',
    customer: 'Amit',
    customerAvatar: 'A',
    status: 'Pending',
    amount: '₹350.00'
  },
  {
    id: '#25419',
    product: 'Lorem Ipsum',
    date: 'Oct 31st, 2023',
    customer: 'Priya',
    customerAvatar: 'P',
    status: 'Delivered',
    amount: '₹450.00'
  }
]
 
export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '₹2,999',
    stock: 45,
    status: 'Active',
    image: 'https://via.placeholder.com/50'
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: '₹5,499',
    stock: 23,
    status: 'Active',
    image: 'https://via.placeholder.com/50'
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: '₹499',
    stock: 120,
    status: 'Active',
    image: 'https://via.placeholder.com/50'
  },
  {
    id: 4,
    name: 'Running Shoes',
    category: 'Footwear',
    price: '₹3,299',
    stock: 0,
    status: 'Out of Stock',
    image: 'https://via.placeholder.com/50'
  },
  {
    id: 5,
    name: 'Backpack',
    category: 'Accessories',
    price: '₹1,299',
    stock: 67,
    status: 'Active',
    image: 'https://via.placeholder.com/50'
  }
]
 
export const users = [
  {
    id: 1,
    name: 'Kevin Kumar',
    email: 'kevin@example.com',
    role: 'Customer',
    joinDate: '2023-06-15',
    status: 'Active',
    orders: 12
  },
  {
    id: 2,
    name: 'Komal Sharma',
    email: 'komal@example.com',
    role: 'Customer',
    joinDate: '2023-07-20',
    status: 'Active',
    orders: 8
  },
  {
    id: 3,
    name: 'Nikhil Patel',
    email: 'nikhil@example.com',
    role: 'Admin',
    joinDate: '2023-01-10',
    status: 'Active',
    orders: 0
  },
  {
    id: 4,
    name: 'Shivam Singh',
    email: 'shivam@example.com',
    role: 'Customer',
    joinDate: '2023-08-05',
    status: 'Inactive',
    orders: 3
  }
]
 
 
export const orderDetailsData = {
  orderId: '#6743',
  dateRange: 'Feb 16, 2022 - Feb 20, 2022',
  customer: {
    fullName: 'Shristi Singh',
    email: 'shristi@gmail.com',
    phone: '+91 904 231 1212'
  },
  orderInfo: {
    shipping: 'Next express',
    paymentMethod: 'Paypal',
    status: 'Pending'
  },
  deliverTo: {
    address: 'Dharam Colony,',
    city: 'Palam Vihar, Gurgaon,',
    state: 'Haryana'
  },
  paymentInfo: {
    cardType: 'Master Card',
    cardNumber: '**** **** 6557',
    businessName: 'Shristi Singh',
    phone: '+91 904 231 1212'
  }
}
 