"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
        <h2 className="text-xl font-bold text-navy-900">
          Something went wrong
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gold-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
