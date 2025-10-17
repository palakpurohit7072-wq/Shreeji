import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const defaultSliderProducts = [
    {
      id: 1,
      name: "Camphor Vaporizer (Premium) with Bhimseni Camphor Tablets 100 gm",
      regularPrice: 769,
      salePrice: 691,
      discount: "-10%",
      rating: 3,
      reviews: 33,
      mainImage: "/src/assets/slide.jpg",
    },
    {
      id: 2,
      name: "Naivedya Cup Sambrani Combo Pack of 3",
      regularPrice: 270,
      salePrice: 253,
      discount: "-6%",
      rating: 4,
      reviews: 36,
      mainImage: "/src/assets/slider1.jpeg",
    },
    {
      id: 3,
      name: "Camphor Mosquito Repellent Refill – Pack of 3",
      regularPrice: null,
      salePrice: 375,
      discount: "",
      rating: 4,
      reviews: 30,
      mainImage: "/src/assets/slider2.jpeg",
    },
    {
      id: 4,
      name: "Woods Agarbatti Combo – Pack of 2",
      regularPrice: 440,
      salePrice: 396,
      discount: "-10%",
      rating: 5,
      reviews: 55,
      mainImage: "/src/assets/slider3.jpeg",
    },
    {
      id: 5,
      name: "Eco-Friendly Havan Cups – 12 pcs",
      regularPrice: 220,
      salePrice: 199,
      discount: "-9%",
      rating: 4,
      reviews: 18,
      mainImage: "/src/assets/slide.jpg",
    },
  ];

  // ✅ CART STATE
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ ORDERS STATE
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ USER PRODUCTS STATE
  const [userProducts, setUserProducts] = useState(() => {
    const saved = localStorage.getItem("userProducts");
    const parsed = saved ? JSON.parse(saved) : [];
    if (parsed.length === 0) return defaultSliderProducts;
    const ids = parsed.map((p) => p.id);
    return [...parsed, ...defaultSliderProducts.filter((d) => !ids.includes(d.id))];
  });

  const [showCart, setShowCart] = useState(false);

  // ✅ LocalStorage Sync
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("userProducts", JSON.stringify(userProducts));
  }, [userProducts]);

  // ✅ Admin product CRUD
  const addUserProduct = (product) => {
    setUserProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.map((p) => (p.id === product.id ? product : p));
      return [...prev, product];
    });
  };

  const updateProduct = (updatedProduct) => {
    setUserProducts((prev) => prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const removeUserProduct = (id) => setUserProducts((prev) => prev.filter((p) => p.id !== id));
  const deleteProduct = (productId) => setUserProducts((prev) => prev.filter((p) => p.id !== productId));

  // ✅ FIXED CART FUNCTION (price issue solved)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      // 🔹 Correct price calculation
      const price = Number(
        product.price || product.salePrice || product.regularPrice || 0
      );

      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...product, price, quantity: 1 }];
    });
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => setCartItems((prev) => prev.filter((item) => item.id !== id));

  // ✅ CART TOTALS
  const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  const totalPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

  // ✅ PLACE ORDER
  const placeOrder = (userInfo) => {
    if (cartItems.length === 0) return;

    const calculatedTotal = cartItems.reduce((a, i) => a + i.price * i.quantity, 0);

    const newOrder = {
      id: "#" + Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      customer: userInfo.name || "Guest",
      status: "Delivered",
      amount: calculatedTotal,
      product: cartItems.map((item) => item.name).join(", "),
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
        total: Number(item.price) * Number(item.quantity),
      })),
      shippingCost: 0,
      payment: userInfo.payment || "PayPal",
      address: userInfo.address || "",
      email: userInfo.email || "",
      phone: userInfo.phone || "",
    };

    setOrders([newOrder, ...orders]);
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQty,
        removeFromCart,
        totalItems,
        totalPrice,
        showCart,
        setShowCart,
        orders,
        setOrders,
        placeOrder,
        userProducts,
        addUserProduct,
        removeUserProduct,
        setUserProducts,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

