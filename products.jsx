import candies1 from "../assets/lollipops.avif";
import candies2 from "../assets/bears.jpeg";
import candies3 from "../assets/choco nutz.jpeg";
import candies4 from "../assets/toffee.jpeg";
import Baked1 from "../assets/Cookies.jpg";
import Baked2 from "../assets/Browine.jpg";
import Baked3 from "../assets/muffins.jpg";
import Baked4 from "../assets/cheese cake.jpeg";
import Frozen1 from "../assets/Ice Cream.jpg";
import Frozen2 from "../assets/icecream cake.jpeg";
import Frozen3 from "../assets/muffins.jpg";
import Frozen4 from "../assets/Smoothie.jpeg";
import Tra1 from '../assets/Baklava.jpeg';
import Tra2 from '../assets/Jalebi.jpg';
import Tra3 from '../assets/Kheer.jpg';
import Tra4 from '../assets/Laddu.jpg';

export const products = [
  {
    id: 1,
    name: 'Candies',
    images: [
      {
        src: candies1,
        name: 'LolliPops',
        price: '$2.00',
        description: `Sweet and fruity lollipops that offer a burst of flavor in every lick.`,
        ingredients: ['Sugar', 'Corn Syrup', 'Natural Flavors', 'Citric Acid', 'Artificial Coloring'],
        nutritionalInfo: ['Calories: 60', 'Total Fat: 0g', 'Sodium: 10mg', 'Carbohydrates: 17g', 'Sugars: 13g', 'Protein: 0g'],
      },
      {
        src: candies2,
        name: 'Jelly',
        price: '$1.50',
        description: `Delicious jelly candies with a chewy texture and an array of fruity flavors.`,
        ingredients: ['Glucose Syrup', 'Sugar', 'Gelatin', 'Fruit Juice Concentrate', 'Citric Acid'],
        nutritionalInfo: ['Calories: 150', 'Total Fat: 0g', 'Sodium: 5mg', 'Carbohydrates: 38g', 'Sugars: 30g', 'Protein: 2g'],
      },
      {
        src: candies3,
        name: 'Nutz Chocolate',
        price: '$3.00',
        description: `Crunchy chocolate packed with an assortment of nuts for a satisfying crunch.`,
        ingredients: ['Milk Chocolate', 'Peanuts', 'Almonds', 'Hazelnuts', 'Soy Lecithin', 'Vanilla Extract'],
        nutritionalInfo: ['Calories: 210', 'Total Fat: 14g', 'Saturated Fat: 5g', 'Sodium: 25mg', 'Carbohydrates: 24g', 'Sugars: 18g', 'Protein: 4g'],
      },
      {
        src: candies4,
        name: 'Chewy Candies',
        price: '$2.50',
        description: `Soft and chewy sweets that melt in your mouth, providing a delightful burst of sweetness.`,
        ingredients: ['Corn Syrup', 'Sugar', 'Gelatin', 'Citric Acid', 'Natural and Artificial Flavors'],
        nutritionalInfo: ['Calories: 140', 'Total Fat: 0g', 'Sodium: 10mg', 'Carbohydrates: 35g', 'Sugars: 30g', 'Protein: 1g'],
      },
    ],
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Baked Snacks',
    images: [
      {
        src: Baked1,
        name: 'Cookies',
        price: '$3.00',
        description: `Crispy and buttery cookies that are a classic favorite for any occasion.`,
        ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Vanilla Extract', 'Baking Powder'],
        nutritionalInfo: ['Calories: 120', 'Total Fat: 5g', 'Saturated Fat: 3g', 'Sodium: 70mg', 'Carbohydrates: 18g', 'Sugars: 9g', 'Protein: 2g'],
      },
      {
        src: Baked2,
        name: 'Brownie',
        price: '$3.50',
        description: `Rich and fudgy brownies that are dense and packed with chocolate goodness.`,
        ingredients: ['Cocoa', 'Flour', 'Butter', 'Eggs', 'Sugar', 'Chocolate Chips'],
        nutritionalInfo: ['Calories: 160', 'Total Fat: 8g', 'Saturated Fat: 4g', 'Sodium: 50mg', 'Carbohydrates: 22g', 'Sugars: 16g', 'Protein: 2g'],
      },
      {
        src: Baked3,
        name: 'Muffins',
        price: '$2.75',
        description: `Soft and fluffy muffins available in a variety of flavors.`,
        ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Baking Soda', 'Milk'],
        nutritionalInfo: ['Calories: 180', 'Total Fat: 6g', 'Saturated Fat: 2g', 'Sodium: 150mg', 'Carbohydrates: 28g', 'Sugars: 15g', 'Protein: 3g'],
      },
      {
        src: Baked4,
        name: 'Cheese Cake',
        price: '$4.00',
        description: `Creamy and tangy cheesecake with a smooth texture and a buttery graham cracker crust.`,
        ingredients: ['Cream Cheese', 'Sugar', 'Eggs', 'Vanilla Extract', 'Graham Crackers', 'Butter'],
        nutritionalInfo: ['Calories: 300', 'Total Fat: 20g', 'Saturated Fat: 12g', 'Sodium: 180mg', 'Carbohydrates: 25g', 'Sugars: 18g', 'Protein: 5g'],
      },
    ],
    status: 'Out of Stock',
  },
  {
    id: 3,
    name: 'Frozen Dessert',
    images: [
      {
        src: Frozen1,
        name: 'Ice Cream',
        price: '$3.50',
        description: `Creamy vanilla ice cream with a smooth texture and a rich, comforting flavor.`,
        ingredients: ['Milk', 'Sugar', 'Cream', 'Vanilla Extract', 'Egg Yolks'],
        nutritionalInfo: ['Calories: 210', 'Total Fat: 12g', 'Saturated Fat: 7g', 'Sodium: 60mg', 'Carbohydrates: 22g', 'Sugars: 20g', 'Protein: 4g'],
      },
      {
        src: Frozen2,
        name: 'Ice Cream Cakes',
        price: '$5.00',
        description: `Delicious ice cream cakes featuring layers of moist cake and creamy ice cream.`,
        ingredients: ['Ice Cream', 'Flour', 'Sugar', 'Butter', 'Eggs', 'Cocoa Powder'],
        nutritionalInfo: ['Calories: 350', 'Total Fat: 18g', 'Saturated Fat: 10g', 'Sodium: 150mg', 'Carbohydrates: 42g', 'Sugars: 30g', 'Protein: 5g'],
      },
      {
        src: Frozen3,
        name: 'Muffins',
        price: '$2.75',
        description: `Soft and cold muffins that make for a delightful frozen treat.`,
        ingredients: ['Flour', 'Milk', 'Sugar', 'Butter', 'Eggs', 'Baking Soda'],
        nutritionalInfo: ['Calories: 200', 'Total Fat: 7g', 'Saturated Fat: 3g', 'Sodium: 140mg', 'Carbohydrates: 28g', 'Sugars: 15g', 'Protein: 4g'],
      },
      {
        src: Frozen4,
        name: 'Smoothie',
        price: '$4.00',
        description: `Refreshing and healthy smoothie made from a blend of fresh fruits.`,
        ingredients: ['Bananas', 'Strawberries', 'Yogurt', 'Honey', 'Orange Juice'],
        nutritionalInfo: ['Calories: 180', 'Total Fat: 2g', 'Saturated Fat: 1g', 'Sodium: 50mg', 'Carbohydrates: 35g', 'Sugars: 30g', 'Protein: 5g'],
      },
    ],
    status: 'In Stock',
  },
  {
    id: 4,
    name: 'Traditional Sweets',
    images: [
      {
        src: Tra1,
        name: 'Baklava',
        price: '$3.50',
        description: `Sweet and crispy baklava made with layers of phyllo pastry and a honey-nut filling.`,
        ingredients: ['Phyllo Dough', 'Honey', 'Walnuts', 'Sugar', 'Butter', 'Cinnamon'],
        nutritionalInfo: ['Calories: 300', 'Total Fat: 18g', 'Saturated Fat: 8g', 'Sodium: 100mg', 'Carbohydrates: 36g', 'Sugars: 24g', 'Protein: 5g'],
      },
      {
        src: Tra2,
        name: 'Jalebi',
        price: '$2.75',
        description: `Sugary and syrupy jalebi with a crispy exterior and a sweet, chewy interior.`,
        ingredients: ['Flour', 'Sugar', 'Yogurt', 'Ghee', 'Saffron', 'Cardamom'],
        nutritionalInfo: ['Calories: 150', 'Total Fat: 5g', 'Saturated Fat: 2g', 'Sodium: 30mg', 'Carbohydrates: 25g', 'Sugars: 20g', 'Protein: 2g'],
      },
      {
        src: Tra3,
        name: 'Rice Kheer',
        price: '$3.00',
        description: `Creamy rice kheer flavored with cardamom and garnished with nuts.`,
        ingredients: ['Rice', 'Milk', 'Sugar', 'Cardamom', 'Almonds', 'Pistachios'],
        nutritionalInfo: ['Calories: 250', 'Total Fat: 10g', 'Saturated Fat: 5g', 'Sodium: 50mg', 'Carbohydrates: 35g', 'Sugars: 20g', 'Protein: 6g'],
      },
      {
        src: Tra4,
        name: 'Laddu',
        price: '$2.50',
        description: `Sweet and round laddus made from gram flour, sugar, and ghee.`,
        ingredients: ['Gram Flour', 'Sugar', 'Ghee', 'Cardamom', 'Almonds', 'Cashews'],
        nutritionalInfo: ['Calories: 200', 'Total Fat: 12g', 'Saturated Fat: 6g', 'Sodium: 10mg', 'Carbohydrates: 24g', 'Sugars: 18g', 'Protein: 3g'],
      },
    ],
    status: 'In Stock',
  },
];
