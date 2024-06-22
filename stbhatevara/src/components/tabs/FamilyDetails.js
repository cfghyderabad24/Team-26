import React from 'react';

const FamilyDetails = () => {
  return (
    <div>
      <h3>Family Details</h3>
      <form>
        <div>
          <label>Father's Name:</label>
          <input type="text" name="fatherName" />
        </div>
        <div>
          <label>Mother's Name:</label>
          <input type="text" name="motherName" />
        </div>
        <div>
          <label>Siblings:</label>
          <input type="text" name="siblings" />
        </div>
      </form>
    </div>
  );
}

export default FamilyDetails;
