import { Button } from "@/components/ui/button";

export const ErrorBoundary = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Oops, something went wrong!</h2>
      <p className="text-muted-foreground mb-6">
        "An unexpected error occurred"
      </p>
      <Button
        className="bg-midnightBlue text-white cursor-pointer"
        onClick={() => {
          window.location.reload();
        }}
      >
        Try again
      </Button>
    </div>
  );
};
