import Skeleton from './Skeleton';

const PageLoader = () => (
  <div className="py-16 bg-white min-h-[80vh]" role="status" aria-busy="true" aria-live="polite">
    <span className="sr-only">Loading...</span>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Skeleton Header */}
      <div className="text-center mb-12 flex flex-col items-center">
        <Skeleton className="h-10 w-3/4 sm:w-1/2 mb-4" />
        <Skeleton className="h-5 w-full sm:w-2/3" />
      </div>

      {/* Skeleton Content (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="p-6 border border-brand-border rounded-lg">
            <Skeleton className="h-6 w-2/3 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-6" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PageLoader;
