/*create nested structure in react*/
/* react coming from node module*/
import React from "react"; 
import ReactDOM from "react-dom/client";
import "./index.css";


const Header = ()=> {
  return(
    <div className="head">
    <img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"/>
<div className="nav-item">
<ul>
<li>Home</li>
<li>About Us</li>
<li>Contact</li>
<li>Art</li>
</ul>
</div>
 </div>
  )
};



const RestroCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime,} = resData?.data;

  return(
  <div className="rest-card">
    
    <img className="res-logo" 
    alt="res-logo"
    src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + cloudinaryImageId }
    />

    <h3>{name}</h3>
    <h4>{cuisines.join(",")}</h4>
    <h4>{avgRating}</h4>
    <h4> ₹{costForTwo/100} FOR TWO</h4>
    <h4> {deliveryTime} minute</h4>
    </div>
)
}

const resList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "48580",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "uuid": "305cb723-c4a1-4edd-a295-937cbb317782",
      "city": "1",
      "area": "Sanjay Nagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "snqnxshliwuloydxs4ps",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 60000,
      "costForTwoString": "₹600 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 2.9000000953674316,
      "slugs": {
        "restaurant": "leon-grill-new-bel-road-sanjay-nagar-new-bel-road",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#52,Agastya Arcade ,80 feet road , Devasandra,Bangalore -560094",
      "locality": "80 Feet Road",
      "parentId": 371281,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6329549~p=1~eid=00000187-3dee-f553-1337-4c7300b00131",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "48580",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "63300",
      "name": "Hotel Empire",
      "uuid": "b0248597-8629-4dc5-9437-098dbcea427a",
      "city": "1",
      "area": "Rajajinagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "ervram6kki8b97it2ulr",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "hotel-empire-rajajinagar-rajajinagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#701,sri lakshmi narayan arcade,modi hospital road,west of chord road,mahalakshmi puram, bangalore - 560086",
      "locality": "West Of Chord Road",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "63300",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "288893",
      "name": "Meghana Foods",
      "uuid": "f0d470e8-1e64-473d-8af0-7745045daddb",
      "city": "1",
      "area": "Rajajinagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "slheenytwb3iaypqf4yd",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 2.700000047683716,
      "slugs": {
        "restaurant": "meghana-foods-rajajinagar-rajajinagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Unnati Arcade, Muncipal, No. 5/111 1st Main road, Rajkumar road, 1st block Rajajinagar ,Blr - 10",
      "locality": "Dr. Rajkumar Road",
      "parentId": 635,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "288893",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "496227",
      "name": "Kitchens of Punjab",
      "uuid": "b7aeb96d-f733-467e-8f49-0dcf80efbbc8",
      "city": "1",
      "area": "Central Bangalore",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "hmvmrxousea63j9vwv9k",
      "cuisines": [
        "Punjabi",
        "North Indian",
        "Thalis",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 6.300000190734863,
      "slugs": {
        "restaurant": "kitchens-of-punjab-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Gilly's Resto Bar, 2nd Floor, Vasavi Complex, 17, St Marks Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      "locality": "St Marks Road",
      "parentId": 6663,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 6400,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6379910~p=7~eid=00000187-3dee-f553-1337-4c7500b00750",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "496227",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 6.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "352159",
      "name": "Rolls On Wheels",
      "uuid": "724d807d-0d41-41a0-bb04-7242f0349f19",
      "city": "1",
      "area": "Rajajinagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "cd378225ea0b386708df030ff9640e62",
      "cuisines": [
        "Fast Food",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "rolls-on-wheels-rajajinagar-rajajinagar-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": ":No 119, 2nd Floor, Above HDFC Bank , 1st main Road, 1st Block, Dr. Rajkumar Road, Rajaji nagar, Bangalore-560010",
      "locality": "Rajajinagar",
      "parentId": 784,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6309818~p=10~eid=00000187-3dee-f553-1337-4c7600b00a39",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "352159",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "210945",
      "name": "Royal Restaurant",
      "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
      "city": "1",
      "area": "Shivajinagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
      "locality": "Sulthangunta",
      "parentId": 2896,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "35% off",
        "shortDescriptionList": [
          {
            "meta": "35% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Phirni on orders above ₹490",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "35% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Phirni on orders above ₹490",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "35% OFF",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "35% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Phirni on orders above ₹490",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 5400,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "210945",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "666036",
      "name": "Byg Brewski Brewing Company",
      "uuid": "b7832866-0ae7-4b44-8d8c-2e7e18a77217",
      "city": "1",
      "area": "Yeshwanthpur",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "89af99208ad863b738c610c4ed625214",
      "cuisines": [
        "Pizzas",
        "Burgers",
        "Pan-Asian",
        "North Indian",
        "Pastas",
        "Grill",
        "Biryani",
        "Mexican"
      ],
      "tags": [
        
      ],
      "costForTwo": 85000,
      "costForTwoString": "₹850 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "byg-brewski-brewing-company-yeshwanthpur-yeshwanthpur",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "4th Floor, Vaishnavi Sapphire Centre 9, 36, Tumkur Rd, Yeshwanthpur Industrial Area, Phase 1, Yeswanthpur, Bengaluru, Karnataka 560022",
      "locality": "Tumkur Road",
      "parentId": 7382,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6353393~p=13~eid=00000187-3dee-f553-1337-4c7700b00d2d",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "666036",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "8032",
      "name": "Burger King",
      "uuid": "37ef8766-1c4d-4aed-a50e-ce18489c27c5",
      "city": "1",
      "area": "Sanjaynagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "mizjamw8zbupaczztfde",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "burger-king-rmv-2nd-stage-sanjay-nagar-new-bel-road-yeshwanthpur",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No.48 , Casino Tower , Opp Ms. Ramaiah Hospital , New Bell Road,RMV 2nd Stage ,Deva Sandra ,Bangalore -560054.",
      "locality": "RMV 2nd Stage",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "8032",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "424558",
      "name": "La Pino'z Pizza",
      "uuid": "8148a6cf-ec13-4800-a649-285af0ac2364",
      "city": "1",
      "area": "Basavanagudi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "mocil3npmwpcdcfaxql1",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 22000,
      "costForTwoString": "₹220 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "la-pino'z-pizza-basavanagudi-basavanagudi",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No.99, Gandhi Bazaar Main road, Basavanagudi, Bengaluru",
      "locality": "Gandhi Bazaar Main Road",
      "parentId": 4961,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 7100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "424558",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "607314",
      "name": "Namaste",
      "uuid": "153cd716-c7ca-436c-bd8e-825e6f08d9c8",
      "city": "1",
      "area": "Vijayanagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "dzacemjl8oskvogrxpyw",
      "cuisines": [
        "South Indian",
        "Thalis",
        "Snacks",
        "Biryani",
        "Indian",
        "Chinese",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 7.099999904632568,
      "slugs": {
        "restaurant": "namaste-vijayanagar-vijayanagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#80, Marenahalli Main Road, Vijayanagar 560040",
      "locality": "Marenahalli Main Road",
      "parentId": 366271,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off | Use code PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off | Use code PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 7100,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "607314",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 7.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "312846",
      "name": "Chinese BAE",
      "uuid": "dcce82f6-e239-44c6-b43a-117dc76142d3",
      "city": "1",
      "area": "R T Nagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "vg0sy0mr422ynwrxj7fo",
      "cuisines": [
        "Chinese",
        "Thai",
        "Seafood",
        "Asian",
        "Combo",
        "Healthy Food",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 3.799999952316284,
      "slugs": {
        "restaurant": "chinese-bae-ramamurthy-nagar-ramamurthy-nagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "17, 1st Main Rd, Dena Bank Colony, Armane Nagar, Bengaluru, Karnataka 560032",
      "locality": "Armane Nagar",
      "parentId": 9769,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6353664~p=19~eid=00000187-3dee-f553-1337-4c7900b01303",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "312846",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 3.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.9",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "10579",
      "name": "Pizza Hut",
      "uuid": "418f38fc-516b-42b7-9a2c-09e0ae1c0fd8",
      "city": "1",
      "area": "New BEL Road",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "kbz95l1syl3jcu4lhtbw",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "pizza-hut-new-bel-road-sanjay-nagar-new-bel-road-yeshwanthpur",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#3, OM Chambers, New Bel Road, Devasandra Opp Ramaiah Hospital",
      "locality": "Devsandra",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "10579",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "254049",
      "name": "Shanghai House",
      "uuid": "016c5663-837e-4a62-bc91-8d95aadde67d",
      "city": "1",
      "area": "R T Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "wpgw8tcy8mfwkwt3svpn",
      "cuisines": [
        "Chinese",
        "Thai",
        "Seafood",
        "Asian",
        "Healthy Food",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 3.799999952316284,
      "slugs": {
        "restaurant": "chinese-bae-banashankari-banashankari",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "17, 1st Main Rd, Dena Bank Colony, Armane Nagar, Bengaluru, Karnataka 560032",
      "locality": "Bairasandra",
      "parentId": 17040,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6353663~p=22~eid=00000187-3dee-f553-1337-4c7a00b01674",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "254049",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 3.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "180551",
      "name": "Razakhiya Hotel",
      "uuid": "12dc78b2-6423-4117-afcc-c26cd00339e6",
      "city": "1",
      "area": "Hbr Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "gpmwhnujwdsb4qciw1wt",
      "cuisines": [
        "North Indian",
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 8.399999618530273,
      "slugs": {
        "restaurant": "razakhiya-hotel-nagavara-hennur-nagavara-hennur",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "80 feet Road, HBR Layout, Hebbala, Bangalore - 560045",
      "locality": "80 feet Road",
      "parentId": 21645,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 8000,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "180551",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 8.399999618530273,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "34269",
      "name": "Hamza hotel",
      "uuid": "849f25cd-8e16-4049-b164-de833e49cfcc",
      "city": "1",
      "area": "Shivajinagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "rea8vn4ubttcd6gcue3p",
      "cuisines": [
        "Continental",
        "Street Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 4.900000095367432,
      "slugs": {
        "restaurant": "hamza-hotel-shivajinagar-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#19HKP road (broadway)Shivajinagar Bangalore 560051",
      "locality": "HKP road",
      "parentId": 21662,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "15% off",
        "shortDescriptionList": [
          {
            "meta": "15% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "15% off up to ₹45 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "15% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "15% off up to ₹45 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 4600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "34269",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 4.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
]
              

const Body = () =>{
  return(
    <div className="body">

    <div className="search">search</div>
    <div className="restro-container">
   { 
    resList.map((restaurant) =>  (
      <RestroCard key={restaurant.data.id} resData={restaurant}/>)
    )
   }
     
     </div>
    </div>
  );
};

const Footer = () =>{
  return(
    <div className="footer">
    </div>
  )
}


const AppLayout = () =>
{
  return(
    <div className="app">
    <Header/>
    <Body/>
    <Footer/>
    </div>
  );
};


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

