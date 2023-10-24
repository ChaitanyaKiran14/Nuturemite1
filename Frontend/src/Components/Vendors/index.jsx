import './index.css';

const Vendors = () => (
  <div className="vendor-registration">
    <h1 className="registration-title">VENDORS REGISTRATION</h1>
    <form className="registration-form">
      <div className="form-group">
        <label htmlFor="vendorName">Vendor Name:</label>
        <input type="text" id="vendorName" name="vendorName" required />
      </div>
      <div className="form-group">
        <label htmlFor="vendorEmail">Email:</label>
        <input type="email" id="vendorEmail" name="vendorEmail" required />
      </div>
      <div className="form-group">
        <label htmlFor="vendorProductTitle">Product Title:</label>
        <input type="text" id="vendorProductTitle" name="vendorProductTitle" required />
      </div>
      <div className="form-group">
        <label htmlFor="productPrice">Price:</label>
        <input type="number" id="productPrice" name="productPrice" required />
      </div>
      <div className="form-group">
        <label htmlFor="productDescription">Product Description:</label>
        <textarea id="productDescription" name="productDescription" required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="productCategory">Product Category:</label>
        <input type="text" id="productCategory" name="productCategory" required />
      </div>
      <div className="form-group">
        <label htmlFor="productImage">Product Image URL:</label>
        <input type="url" id="productImage" name="productImage" required />
      </div>
      <div className="form-group">
        <label htmlFor="vendorRating">Rating:</label>
        <input type="number" id="vendorRating" name="vendorRating" step="0.1" required />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  </div>
);

export default Vendors;
