// components/card/CardNumberWithBrand.tsx
"use client";

import React, { JSX } from "react";

type Props = {
  last4?: string | null; // raw card number or last4 from params
  className?: string;
  brand: string;
};


/* Simple inline SVG icons */
const Icons: Record<string, JSX.Element> = {
  visa: (
    <svg viewBox="0 0 48 32" width="48" height="32" aria-hidden>
      <rect width="48" height="32" rx="4" fill="#1a1f71" />
      <path d="M10 22l2-12h3l-2 12h-3zM18 10c1.1 0 1.9.5 2.6 1.5l2.7 4.5h-3l-1.7-3h-.1v3H15v-9h3z" fill="#fff"/>
    </svg>
  ),
  mastercard: (
    <svg viewBox="0 0 48 32" width="48" height="32" aria-hidden>
      <rect width="48" height="32" rx="4" fill="#111827" />
      <circle cx="20" cy="16" r="8" fill="#ff5f00" />
      <circle cx="28" cy="16" r="8" fill="#eb001b" />
      <path d="M24 16a8 8 0 0 1-4 6.928A8 8 0 0 0 28 9.072 8 8 0 0 1 24 16z" fill="#ffb900" />
    </svg>
  ),
  amex: (
    <svg viewBox="0 0 48 32" width="48" height="32" aria-hidden>
      <rect width="48" height="32" rx="4" fill="#2e77bb" />
      <text x="24" y="20" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">AMEX</text>
    </svg>
  ),
  discover: (
    <svg viewBox="0 0 48 32" width="48" height="32" aria-hidden>
      <rect width="48" height="32" rx="4" fill="#0b1221" />
      <circle cx="34" cy="16" r="6" fill="#f79d00" />
      <text x="14" y="20" fontSize="8" fill="#fff" fontFamily="sans-serif">DISCOVER</text>
    </svg>
  ),
  jcb: (
    <svg viewBox="0 0 48 32" width="48" height="32" aria-hidden>
      <rect width="48" height="32" rx="4" fill="#0b1221" />
      <text x="24" y="20" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">JCB</text>
    </svg>
  ),
  unknown: (
    <svg viewBox="0 0 48 32" width="48" height="32" aria-hidden>
      <rect width="48" height="32" rx="4" fill="#111827" />
      <path d="M14 10h20v12H14z" fill="#374151" />
      <text x="24" y="20" textAnchor="middle" fontSize="6" fill="#9ca3af" fontFamily="sans-serif">CARD</text>
    </svg>
  ),
};

export default function CardNumberWithBrand({ last4, className = "", brand }: Props) {


  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-full bg-[#1d1d1d] border border-[#FFFFFF36] text-white ${className}`}
      role="group"
      aria-label="Card number"
    >
      <div className="flex-shrink-0">{Icons[brand]}</div>

      <div className="flex-1">
        <label className="sr-only">Card number</label>
        {/* <div className="text-sm tracking-widest">
          **** **** ****
        </div> */}
        {last4 ? (
          <div className="text-xs text-gray-400 mt-1">**** **** **** {last4}</div>
        ) : null}
      </div>
    </div>
  );
}
