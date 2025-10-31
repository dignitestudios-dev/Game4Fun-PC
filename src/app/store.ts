import { authApi } from "@/services/auth-api";
import { chatApi } from "@/services/chat-api";
import { checkoutApi } from "@/services/checkout-api";
import { contactApi } from "@/services/contact-api";
import { faqApi } from "@/services/faq-api";
import { productApi } from "@/services/product-api";
import { reviewApi } from "@/services/review-api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { customProductApi } from "@/services/custom-product-api";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [customProductApi.reducerPath]: customProductApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productApi.middleware)
      .concat(faqApi.middleware)
      .concat(contactApi.middleware)
      .concat(chatApi.middleware)
      .concat(reviewApi.middleware)
      .concat(checkoutApi.middleware)
      .concat(customProductApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
