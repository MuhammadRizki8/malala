const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <div className="h-24 w-24 md:w-40 md:h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin ml-4"></div>
    </div>
  );
};

export default LoadingSpinner;
