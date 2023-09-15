// PricePackage.js

import React from 'react';
import "../styles/PricePackage.css"; // Import the CSS file for styling

function PricePackage() {
  return (
    <div className="row">
      <div className="flex justify-center w-full mx-auto px-col sm-px-0">
        <div className="packages relative flex flex-wrap mx-auto w-full rounded xl-shadow-theme xl-w-1/3">
          <div className="package relative flex flex-col mt-24 py-30 px-48 rounded text-grey-900 xl-w-full w-full sm-w-full xl-mt-0 bg-grey-100 shadow-theme xl-shadow-none">
            <h6 className="text-lg font-semibold text-grey-900">Basic</h6>
            <div className="package--price relative flex mt-30 font-bold text-5xl text-grey-1100 whitespace-nowrap">
  <span data-discounts="[]" data-input="qty-1066" data-price="0" className="relative z-10 custom-price">
    <span className="woocommerce-Price-amount amount">
      <bdi><span className="woocommerce-Price-currencySymbol">&#8377;</span>0.00</bdi>
    </span>
  </span>
</div>

            <ul className="package--features flex flex-col mt-30">
              <li className="relative mb-8">unlimited Ads allowed</li>
              <li className="relative mb-8">365 days per submission</li>
              <li className="relative mb-8">12 free images</li>
              <li className="relative mb-8">1 free video</li>
              <li className="relative mb-8">1 additional document</li>
            </ul>
            <a href="login page" className="package--buy action--buy-package flex-center mt-30 mb-20 py-8 h-46 border rounded font-semibold border-grey-500 rounded hover:bg-grey-500 hover:shadow-md hover:text-white">Buy Package</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePackage;
