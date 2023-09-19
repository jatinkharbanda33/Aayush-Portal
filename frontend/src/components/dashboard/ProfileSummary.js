import React from 'react';

function ProfileSummary() {
  return (
    <div className="profile-summary">
      <img
        src="/profile-picture.jpg" // Replace with the path to the user's profile picture
        alt="Profile"
        className="profile-summary__image"
      />
      <h5 className="profile-summary__name">John Doe</h5>
      <p className="profile-summary__headline">Software Engineer</p>
      <p className="profile-summary__summary">
        Experienced software engineer with a passion for building great
        software products.
      </p>
    </div>
  );
}

export default ProfileSummary;
