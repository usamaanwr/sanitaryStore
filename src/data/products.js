// // src/data/categories.js
// const categories = [
//   {
//     id: 1,
//     title: "Designer Faucets",
//     slug: "faucets",
//     description: "Anti-rust brass core luxury taps with custom premium finishes.",
//     image: "/assets/productimages/faucet.jpg",
//     products: [
//       { id: "f1", name: "Classic Chrome Faucet", price: "Rs. 4,500", image: "/assets/productimages/faucet.jpg", desc: "Premium brass core with high-gloss chrome plating." },
//       { id: "f2", name: "Matt Black Mixer", price: "Rs. 7,500", image: "/assets/productimages/faucet.jpg", desc: "Contemporary matt black finish with smooth dual control." },
//       { id: "f3", name: "Rose Gold Basin Tap", price: "Rs. 12,000", image: "/assets/productimages/faucet.jpg", desc: "Luxury electroplated rose gold tap for premium vanities." }
//     ]
//   },
//   {
//     id: 2,
//     title: "Thermostatic Showers",
//     slug: "showers",
//     description: "Smart temperature control systems for high-end bathrooms.",
//     image: "/assets/productimages/basin.jpg",
//     products: [
//       { id: "s1", name: "Rainfall Smart Shower", price: "Rs. 24,000", image: "/assets/productimages/basin.jpg", desc: "360-degree overhead rainfall experience with smart stop." },
//       { id: "s2", name: "Digital Temperature Mixer", price: "Rs. 32,000", image: "/assets/productimages/basin.jpg", desc: "LED display thermostatic controller with anti-scald protection." }
//     ]
//   },
//   {
//     id: 3,
//     title: "Bespoke Washbasins",
//     slug: "basins",
//     description: "Monolithic ceramic basins crafted for contemporary architectural spaces.",
//     image: "/assets/productimages/shower.jpg",
//     products: [
//       { id: "b1", name: "Monolithic Pedestal Basin", price: "Rs. 18,500", image: "/assets/productimages/shower.jpg", desc: "Single piece matte ceramic Italian design basin." },
//       { id: "b2", name: "Countertop Quartz Bowl", price: "Rs. 14,000", image: "/assets/productimages/shower.jpg", desc: "Scratch-resistant quartz stone bowl with fine rim details." }
//     ]
//   },
//   {
//     id: 4,
//     title: "Smart Sanitary Ware",
//     slug: "sanitary",
//     description: "Intelligent wall-hung toilets with automated hygienic features.",
//     image: "/assets/productimages/toilet.jpg",
//     products: [
//       { id: "w1", name: "Intelligent Wall-Hung Commode", price: "Rs. 65,000", image: "/assets/productimages/toilet.jpg", desc: "Automated lid flushing, heated seat, and nightlight comfort." },
//       { id: "w2", name: "Rimless Eco Toilet", price: "Rs. 28,000", image: "/assets/productimages/toilet.jpg", desc: "Super efficient rimless vortex flush technology for modern hygiene." },
//       { id: "w3", name: "Matt Grey Concealed Suite", price: "Rs. 42,000", image: "/assets/productimages/toilet.jpg", desc: "Premium wall-hung closet with concealed cistern frame." }
//     ]
//   }
// ];

// export default categories;
// src/data/categories.js
const categories = [
  {
    id: 1,
    title: "Designer Faucets",
    slug: "faucets",
    description: "Anti-rust brass core luxury taps with custom premium finishes.",
    image: "/assets/productimages/faucet.jpg",
    products: [
      { 
        id: "f1", 
        name: "Classic Chrome Faucet", 
        price: "Rs. 4,500", 
        // 👇 Badi image ke liye pehla index use hoga, baaki 3 niche thumbnails ke liye
        images: [
          "/assets/productimages/faucet.jpg", // Yeh main image banegi
          "/assets/productimages/faucet.jpg", // Thumbnail 1
          "/assets/productimages/faucet.jpg", // Thumbnail 2
          "/assets/productimages/faucet.jpg"  // Thumbnail 3
        ], 
        desc: "Premium brass core with high-gloss chrome plating." 
      },
      // ... Baki products mein bhi isi tarah 'images' ka array bana do malik
    ]
  }
];
export default categories;