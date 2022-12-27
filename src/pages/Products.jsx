import React from "react";
import NavBar from "../Components/NavBar";

function Products() {
  return (
    <div className="ProductsPage">
      <NavBar />
      <div>
        <h1 className="Products">Individual Packages</h1>
      </div>
<br />
<br />
        
          <h1 className="ProductsList">
         
          <div>Resume Writing</div>
          <div>Job Search Coaching</div>
          <div>Apply to Jobs</div>
          </h1>
<br />

          <div className="ProductInfo">
            <div className="ProLeft">
              
              <li>✓ Consultation with career coach</li>
              <li>✓ Professional resume rewrite/edit</li> 
              <li>✓  2 Day turnaround for first draft</li> 
              <li>✓  2 Day turnaround for final draft after your feedback</li> 
              <li>✓  Negotiation Coaching</li> 
              <br />
              <div className="Price">299$</div>
            </div>
            <div className="ProMid">
              <li>✓  Lifetime Access to Mental Wellness App</li>
              <li>✓ 60 Day Resume Guarantee **</li>
              <li>✓  Consultation with career coach</li>
              <li>✓  Job Search Readiness Plan</li>
              <li>✓  Negotiation Coaching</li>
              <br />
              <div className="Price">299$</div>
            </div>
            <div className="ProLeft">
              <li>✓  Lifetime Access to Mental Wellness App</li>
              <li>✓  Consultation with career coach</li>
              <li>✓  Apply to up to 5 targeted jobs</li>
              <li>✓  Network with target employees</li>
              <li>✓  Application Summary</li>
              <li>✓  Negotiation Coaching</li>
              <li>✓  Lifetime Access to Mental Wellness App</li>
              <br />
              <div className="Price">275$</div>
            </div>
            </div>
</div>
                 
          
        
    
      
      
    
  );
}

export default Products;
