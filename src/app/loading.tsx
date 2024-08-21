export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <style>
        {`
    .animate-spin {
      animation: spin 1s linear infinite;
      }
    @keyframes spin {
      to {
        transform: rotate(360deg);
        }
      }
  `}
      </style>
      ;
      <div className="relative">
        <div className="h-44 w-44 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-44 w-44 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
      </div>
    </div>
  );
}
