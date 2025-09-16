"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        {children} <Toaster />
      </Elements>
    </Provider>
  );
}
