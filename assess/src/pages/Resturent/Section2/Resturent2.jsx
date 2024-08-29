import "./Resturent2.css"
import Image1 from "../../../assets/resturents/burger.jpg"
import Image2 from "../../../assets/resturents/kfc.webp"
import Image3 from "../../../assets/resturents/mcdonald.jpg"
import Image4 from "../../../assets/resturents/popeys.jpg"
import Image5 from "../../../assets/resturents/star.jpg"
import Image6 from "../../../assets/resturents/tikka.jpg"

import Card1 from "./Card/Card"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
// Mock Data Cards
  const mockData1 = [
    {
      id: "0001",
      title: "The Crispy Place",
      paragraph: "123 Food Street, Flavor Town",
      rating: 5,
      image: Image1,
      menu: [
        {
          id: "menu001",
          image: Image1,
          title: "Crispy Chicken",
          description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
          price : 15.21,
        },
        {
          id: "menu002",
          image: Image2,
          title: "Crispy Fries",
          description: "Golden crispy fries with a side of dipping sauce",
          price : 12.21,
        },
      ],
    },
    {
      id: "0002",
      image: Image2,
      title: "Bacon Haven",
      paragraph: "456 Grill Avenue, Sizzle City",
       
      rating: 4.5,
      menu: [
        {
          id: "menu003",
          image: Image2,
          title: "Ultimate Bacon",
          description: "House patty, cheddar cheese, bacon, onion, mustard",
          price : 22.21,
        },
        {
          id: "menu004",
          image: Image3,
          title: "Bacon Fries",
          description: "Fries topped with bacon and melted cheese",
          price : 10.21,
        },
      ],
    },
    {
      id: "0003",
      image: Image3,
      title: "Shepherd's Delight",
      paragraph: "789 Comfort Lane, Homestead",
      rating: 4,
      menu: [
        {
          id: "menu005",
          image: Image3,
          title: "Black Sheep",
          description: "American cheese, tomato relish, avocado, lettuce, red onion",
          price : 2.2,
        },
        {
          id: "menu006",
          image: Image4,
          title: "Lamb Burger",
          description: "Grilled lamb patty with tzatziki, tomatoes, and lettuce",
          price : 4.21,
        },
      ],
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Paradise",
      paragraph: "321 Green Blvd, Herbivore City",
      rating: 3.5,
      menu: [
        {
          id: "menu007",
          image: Image4,
          title: "Vegan Burger",
          description: "House patty, cheddar cheese, bacon, onion, mustard",
          price : 14.21,
        },
        {
          id: "menu008",
          image: Image5,
          title: "Vegan Salad",
          description: "Fresh greens, avocado, cherry tomatoes, and vegan dressing",
          price : 2.21,
        },
      ],
    },
    {
      id: "0005",
      image: Image5,
      title: "Burger Kings",
      paragraph: "654 Burger Road, Stack Town",
      rating: 3,
      menu: [
        {
          id: "menu009",
          image: Image5,
          title: "Double Burger",
          description: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
          price : 12.21,
        },
        {
          id: "menu010",
          image: Image6,
          title: "Classic Burger",
          description: "Single patty with lettuce, tomato, and house sauce",
          price : 2.81,
        },
      ],
    },

    // Add more restaurant objects as needed
  ];
  


export default function Resturent2() {

  const renderRatingIcons = (rating) => {
    const stars = [];
  
    // Calculate the number of full, half, and empty stars
    const fullStars = Math.floor(rating);  // Number of full stars
    const hasHalfStar = rating % 1 !== 0;  // Whether there's a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);  // Remaining empty stars
  
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar size={20} key={`full${i}`} />);
    }
  
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt size={20} key="half" />);
    }
  
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar size={20} key={`empty${i}`} />);
    }
  
    return stars;
  }



  return (
    <div className="resturent2 mt-5">
        <div className="container resturent2-main d-flex justify-content-center flex-wrap gap-2  ">
        {
          mockData1.map((cardData,index)=>(
              <Card1 key={index} 
              image={cardData.image} 
              title={cardData.title}
              rating = {cardData.rating}
              para = {cardData.paragraph}
              price = {cardData.price}
              renderRatingIcons = {renderRatingIcons}
              menu = {cardData.menu}
              />
          )
        )}
        </div>
    </div>
  )
}
