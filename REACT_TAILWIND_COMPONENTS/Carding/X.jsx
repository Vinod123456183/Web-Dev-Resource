// Best USe Of Map 


// isse length of code bahut km ho gya bec

// hme ek hi chiz ko 4 baar krna prta


import i1 from '../smallpages/Smallassets/demo-fashion-store-banner-01.jpg';
import i2 from '../smallpages/Smallassets/demo-fashion-store-banner-02.jpg';
import i3 from '../smallpages/Smallassets/demo-fashion-store-banner-03.jpg';
import i4 from '../smallpages/Smallassets/demo-fashion-store-banner-04.jpg';

      {/* Small Pages */}


      {/* This method is more Convinent for line saving imppp */}
      <div className="bg-red-500 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
        {[
          { img: i1, alt: "Women", label: "Women" },
          { img: i2, alt: "Men", label: "Men" },
          { img: i3, alt: "Others", label: "Others" },
          { img: i4, alt: "Kids", label: "Kids" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} alt={item.alt} className="w-full h-auto rounded-lg mb-2" />
            <button className="bg-blue-600 text-white rounded-md p-2">
              {item.label}
            </button>
          </div>
        ))}
      </div>
