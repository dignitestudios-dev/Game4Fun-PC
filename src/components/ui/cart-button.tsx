import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CartButton({ cartCount }: { cartCount: number }) {
  return (
    <Link
      href="/cart"
      className="bg-[linear-gradient(to_right,#C100FF,#FFBE96)] p-[1.2px] rounded-full flex relative"
    >
      <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center relative">
        <Image
          src="/images/cart-icon.png"
          alt="cart"
          width={23}
          height={23}
        />

        {/* Cart Count Badge */}
        <AnimatePresence>
          {cartCount >= 0 && (
            <motion.div
              key={cartCount} // re-animate on count change
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {cartCount}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
}
