import { create } from "zustand";
import toast from "react-hot-toast";

export const domain = "https://intuitive-cactus-25a6544a8c.strapiapp.com";

export const cartIndex = create((set)=>({
    value:false,
    openCart : ()=>(set(()=>({value : true}))),
    closeCart : ()=>(set(()=>({value : false}))),
    // toggle: ()=>(set((state)=>{({value: !state.value});}))
}));

export const menuIndex = create((set)=>({
    menuOpen: true,
    toggleMenu: ()=>(set((state)=>({menuOpen: !state.menuOpen}))),
    closeMenu: ()=>(set(()=>({menuOpen: false}))),
    openMenu: ()=>(set(()=>({menuOpen: true}))),
}));


export const useCart = create((set) => ({
  items: [],
  total: 0,

  addToCart: (newProduct) =>
    set((state) => {
      let products = state.items;

      let final = products.findIndex((el) => {
        return el.documentId == newProduct.documentId;
      });

      if (final == -1) {
        // The Product not into Cart
        products.push({ ...newProduct, qty: 1 });
        toast.success('Added to cart');
      } else {
        // The Product in cart Qty++
        products[final].qty++;
        toast.success('Product Qty Changed To : ' + products[final].qty);
      }
      state.calcTotal();

      return { items: products };
    }),

  incrmentQty: (documentId) =>
    set((state) => {
      let products = state.items;
      let index = products.findIndex((el) => el.documentId == documentId);
      products[index].qty++;
      toast.success('Product Qty Changed To : ' + products[index].qty);
      state.calcTotal();
      return { items: products };
    }),

  decrmentQty: (documentId) =>
    set((state) => {
      let products = state.items;
      let index = products.findIndex((el) => el.documentId == documentId);
      if (products[index].qty > 1) {
        products[index].qty--;
        toast.success('Product Qty Changed To : ' + products[index].qty);
      } else {
        products.splice(index, 1); 
        toast.success('Product removed from cart');
      }
      state.calcTotal();
      return { items: products };
    }),

  removeFromCart: (documentId) =>
    set((state) => {
      let products = state.items;
      let index = products.findIndex((el) => el.documentId == documentId);
      products.splice(index, 1);
      toast.success('Product removed from cart');
      state.calcTotal();
      return { items: products };
    }),

  calcTotal: () =>
    set((state) => {
      let finalTotal = 0;

      state.items.forEach((el) => {
        finalTotal += el.qty * (el.discountPrice ? el.discountPrice : el.originalPrice);
      });

      return { total: finalTotal };
    }),

  clearCart: () =>
    set(() => {
      return { items: [], total: 0 };
    }),
}));
