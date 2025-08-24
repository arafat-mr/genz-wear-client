import { PuffLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/30 w-full flex items-center justify-center z-50">
      <PuffLoader color="#F43F5E" size={120} speedMultiplier={1.2} /> {/* Bigger size */}
    </div>
  );
};

export default LoadingSpinner;
