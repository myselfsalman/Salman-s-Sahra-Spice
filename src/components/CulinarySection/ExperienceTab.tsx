const ExperienceTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"
          alt="Restaurant Experience"
          className="rounded-lg"
        />
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">OUR CULINARY JOURNEY</h2>
          <p className="text-gray-600">
            With over 20 years of experience serving authentic Saudi cuisine, we've mastered the art of creating unforgettable dining experiences. Our expert chefs combine traditional recipes with modern techniques to bring you the finest flavors of Saudi Arabia.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary">50k+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;