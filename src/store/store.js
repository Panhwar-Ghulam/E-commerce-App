// store/useStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set,get) => ({
      products: [],
      cateqoryProducts: [],
      cartItems: [],
      quantity:1,
      setProducts:(list) => set(() => ({ products: list,cateqoryProducts: list})),
      setCategoryProducts:(list) => set(() => ({ cateqoryProducts: list})),
      addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, {...item,quantity:1}] })),
      removeItme: (item) => set((state) =>({ cartItems:  state.cartItems.filter(row=> row.id != item.id)})), 
      addItem:(item)=>set((state)=>({ quantity: state.quantity+1})),
      updateQuantity: (id) => {
        const { cartItems } = get();
        const productIndex = cartItems.findIndex((item) => item.id === id);
    
        if (productIndex !== -1) {
          const updatedCartItems = [...cartItems];
          const currentQuantity = cartItems[productIndex].quantity;

          updatedCartItems[productIndex] = {
            ...updatedCartItems[productIndex],
            quantity: currentQuantity +1,
          };
    
          set({ cartItems: updatedCartItems });
          console.log(`Updated product (ID: ${id})`);
        } else {
          console.error(`Product with ID ${id} not found in cartItems.`);
        }
      },
    
      decrementQuantity: (id) => {
        const { cartItems } = get();
        const productIndex = cartItems.findIndex((item) => item.id === id);
    
        if (productIndex !== -1) {
          const currentQuantity = cartItems[productIndex].quantity;
          
          if (currentQuantity > 1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[productIndex] = {
              ...updatedCartItems[productIndex],
              quantity: currentQuantity - 1,
            };
    
            set({ cartItems: updatedCartItems });
            console.log(`Decremented product (ID: ${id}) to quantity: ${currentQuantity - 1}`);
          } else {
            console.warn(`Cannot decrement. Product (ID: ${id}) already has quantity: ${currentQuantity}`);
            removeProduct(id);
          }
        } else {
          console.error(`Product with ID ${id} not found in cartItems.`);
        }
      },
    
      removeProduct: (id) => {
        const { cartItems } = get();
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
    
        set({ cartItems: updatedCartItems });
        console.log(`Removed product (ID: ${id}) from cartItems.`);
      },
      cartTotal: () => {
        const { cartItems } = get();
      
        const products = cartItems.map(item => ({
          name: item.title,
          quantity: item.quantity,
          price: item.price,
          totalPrice: parseFloat((item.quantity * item.price).toFixed(2))
        }));
      
        const grandTotal = parseFloat(
          products.reduce((total, product) => total + product.totalPrice, 0).toFixed(2)
        );
      
        return {
          products,
          grandTotal
        };
      },
      
    }),
    {
      name: 'shopping-cart', 
      getStorage: () => localStorage
    }
  )
);

export default useStore;
