const PageBanner = ({ title, subtitle, description }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <h2 className="text-xl font-medium mb-4 text-blue-100">{subtitle}</h2>}
        {description && <p className="text-lg text-blue-100 max-w-3xl mx-auto">{description}</p>}
      </div>
    </div>
  );
};

export default PageBanner;