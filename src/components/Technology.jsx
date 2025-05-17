import React from "react";
import shopify from '../assets/Shopify.png'
import megento from '../assets/magento.png'
import transparent from '../assets/tt.png'
import  woo from '../assets/woo.png'
import Custom from '../assets/Custom.png'
import Headless from  '../assets/Headless.png'

const Technology = () => {

    const TechnologyItem = [
        {
          src : shopify,
          text : 'Over 4.4 million businesses are thriving on shopify. Let’s put your business right at the top with our powerful shopify stores and mobile Apps'
        },
        {
            src : megento,
            text : 'Big brand are thriving with magento stores are you missing out? We can build a feature - rich Magento 2 store for you the lead and scale online!'
        },
        {
            src :transparent,
            text : 'Sell Smarter, not harder with Bigcomerce! We build easy-to-use stores that grab more attention and crush the competition.'
        },
        {
            src : woo,
            text : 'Over 4.4 million businesses are thriving on shopify. Let’s put your business right at the top with our powerful shopify stores and mobile Apps'
        },
        {
            src : Custom,
            text : 'Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality. '
        },
        {
            src : Headless,
            text : 'Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality. '
        }
    ]
  return (
    <div className="flex flex-col gap-4 items-center bg-[#E7E7E7] mb-4">
      <h1 className="text-2xl text-center  underline decoration-blue-600">
        Technologies We Use
      </h1>
      <div>
        <p className="font-semibold text-2xl ">Building Tech-Driven Ecommerce Stores</p>


      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
         {
            TechnologyItem.map((item,index) => (
                <div className="flex flex-col gap-2 border-2 px-2 py-8 rounded-2xl border-blue-600 bg-blue-50 cursor-pointer" key={index}>
                  <img src={item.src} alt="logo" width={100} />
                  <p>{item.text}</p>
                </div>
            )
                
            )
         }
      </div>
    </div>
  );
};

export default Technology;
