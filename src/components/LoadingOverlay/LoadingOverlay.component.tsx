import { Loader } from "lucide-react";

export const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <Loader className="w-12 h-12 text-white animate-spin" />
        <span className="text-white text-lg font-medium">Loading...</span>
      </div>
    </div>
  );
};
