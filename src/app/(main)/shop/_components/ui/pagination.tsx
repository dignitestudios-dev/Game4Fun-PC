import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center rounded-full gap-3 mt-10 border-2 border-pink-400 ">
      {/* Prev */}
      <button
        className="p-2 rounded-full  disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>

      {/* Pages */}
      <div className="flex items-center gap-3  rounded-full px-4 py-2 ">
        {pages.slice(0, 5).map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-8 h-8 flex items-center font-semibold justify-center rounded-full transition 
              ${num === currentPage 
                ? "bg-gradient-to-r from-purple-600 to-pink-400 text-white" 
                : "hover:bg-pink-600/20 text-white"}`}
          >
            {num}
          </button>
        ))}
        {totalPages > 5 && <span className="text-white">...</span>}
      </div>

      {/* Next */}
      <button
        className="p-2 rounded-full  disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
};


export default Pagination