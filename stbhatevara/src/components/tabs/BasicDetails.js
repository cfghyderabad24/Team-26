import React from 'react';

const BasicDetails = () => {
  return (
    <div>
      <h3>Basic Details</h3>
      <form>
        <div>
          <label>Full Name:</label>
          <input type="text" name="Name" />
        </div>
        <div>
          <label>Course Name:</label>
          <input type="text" name="courseName" />
        </div>
        <div>
          <label>Total Duration:</label>
          <input type="number" name="totalDuration" />
        </div>
        <div>
          <label>Institute Name:</label>
          <input type="text" name="instituteName" />
        </div>
        <div>
          <label>Affiliated University:</label>
          <input type="text" name="affiliatedUniversity" />
        </div>
        <div>
          <label>Current Year Fees:</label>
          <input type="number" name="currentYearFee" />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>postal Addresss:</label>
          <input type="text" name="postalAddress" />
        </div>
        <div>
          <label>Whatsapp Number:</label>
          <input type="number" name="whatsappNumber" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
      </form>
    </div>
  );
}

export default BasicDetails;
