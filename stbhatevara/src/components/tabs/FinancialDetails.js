import React from 'react';

const FinancialDetails = () => {
  return (
    <div>
      <h3>Financial Details</h3>
      <form>
        <div>
          <label>Annual Income:</label>
          <input type="text" name="annualIncome" />
        </div>
        <div>
          <label>Source of Income:</label>
          <input type="text" name="sourceOfIncome" />
        </div>
      </form>
    </div>
  );
}

export default FinancialDetails;
