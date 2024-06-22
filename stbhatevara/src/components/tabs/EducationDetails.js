import React from 'react';

const EducationDetails = () => {
  return (
    <div>
      <h3>Education Details</h3>
      <form>
        <div>
          <label>Highest Qualification:</label>
          <input type="text" name="qualification" />
        </div>
        <div>
          <label>Institution:</label>
          <input type="text" name="institution" />
        </div>
        <div>
          <label>Year of Passing:</label>
          <input type="text" name="yearOfPassing" />
        </div>
      </form>
    </div>
  );
}

export default EducationDetails;

