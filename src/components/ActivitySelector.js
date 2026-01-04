import React, { useState } from 'react';

const ActivitySelector = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]); // Store selected activities
  const [selectedActivitiesName, setSelectedActivitiesName] = useState([]); // Store selected activities

  const activities = [
    {
      name: 'Beach Tours',
      description: 'Explore the best beaches of Menorca.',
      image: '/assets/beach-tour.jpg',
      moreInfo: 'Menorca is famous for its pristine, unspoiled beaches with crystal-clear waters. Join our beach tours and discover secluded coves, white sandy shores, and the beauty of the Mediterranean coast. Whether you want to swim, relax, or take in the breathtaking views, Menorca’s beaches are a paradise for nature lovers and beach enthusiasts alike.',
    },
    {
      name: 'Hiking Trails',
      description: 'Hike through Menorca’s stunning landscapes.',
      image: '/assets/hiking-trail.jpg',
      moreInfo: 'Menorca is home to the iconic Cami de Cavalls, a historic coastal trail that circumnavigates the island. As you hike along this breathtaking path, you’ll encounter lush forests, rugged cliffs, and stunning beaches. The trail offers hikers a chance to experience Menorca’s natural beauty up close, with a variety of terrains and spectacular views of the Mediterranean Sea. Perfect for adventurers and nature lovers alike!',
    },
    {
      name: 'Cultural Tours',
      description: 'Discover the island’s rich history and culture.',
      image: '/assets/cultural-tour.jpg',
      moreInfo: 'Step back in time and explore Menorca’s fascinating history with a guided cultural tour. Visit ancient Talaiots, megalithic stone structures that date back thousands of years, and learn about the island’s early inhabitants. Wander through charming villages, visit archaeological sites, and immerse yourself in the rich heritage of Menorca. These tours offer a glimpse into the island’s cultural past, making it perfect for history buffs and cultural enthusiasts.',
    },
  ];

  const toggleActivity = (index) => {
    // Toggle the expanded view for the clicked card, and close others
    setActiveIndex(activeIndex === index ? null : index);
  };

  const addToCart = (activity) => {
    if (!selectedActivitiesName.includes(activity.name)) {  // Prevent adding the same activity twice
      setSelectedActivities([...selectedActivities, activity]);
      setSelectedActivitiesName([...selectedActivitiesName, activity.name]);

    }
  };

  const removeFromCart = (activity) => {
    setSelectedActivities(selectedActivities.filter(item => item !== activity));
    setSelectedActivitiesName(selectedActivitiesName.filter(item => item !== activity.name));

  };

  return (
    <div>
      <div className="activity-selector">
        <h2>Popular Activities</h2>
        <div className="activity-cards">
          {activities.map((activity, index) => (
            <div
              className={`activity-card ${activeIndex === index ? 'active' : ''}`}
              key={index}
            >
              <div
                className="activity-image"
                style={{ backgroundImage: `url(${activity.image})` }}
              />
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>

              {/* Learn More Button */}
              <div className="learn-more" onClick={() => toggleActivity(index)}>
                Learn More
              </div>

              {/* Expanded Info */}
              {activeIndex === index && (
                <div className="activity-info">
                  <p>{activity.moreInfo}</p>
                </div>
              )}

              {/* Add to Cart */}
              <div className="add-to-cart" onClick={() => addToCart(activity)}>
                Add to Cart
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h3>Your Selected Activities</h3>
        <ul>
          {selectedActivities.map((activity, index) => (
            <li key={index}>
              {activity.name}
              <button onClick={() => removeFromCart(activity)}>Remove</button>
            </li>
          ))}
        </ul>
        {selectedActivities.length === 0 && <p>No activities selected.</p>}
      </div>
    </div>
  );
};

export default ActivitySelector;
