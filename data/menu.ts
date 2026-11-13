// All menu content lives here, separate from the design.
// For a real client you only edit this file to update dishes and prices.

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  tags?: ("Spicy" | "Vegetarian" | "Chef's pick")[];
  image?: string; // file name inside /public/images
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Charred Corn Chaat", description: "Grilled sweet corn, lime, chilli, tamarind and fresh herbs.", price: 9, tags: ["Vegetarian"] },
      { name: "Smoked Chicken Wings", description: "Six wings glazed in honey, garlic and red chilli.", price: 12, tags: ["Spicy"] },
      { name: "Lentil Soup", description: "Slow-cooked yellow lentils with cumin butter and toasted bread.", price: 8, tags: ["Vegetarian"] },
    ],
  },
  {
    id: "grill",
    title: "From the Grill",
    items: [
      { name: "Saffron Lamb Chops", description: "Four chops marinated for 24 hours, served with mint yoghurt.", price: 29, tags: ["Chef's pick"], image: "dish-1.jpg" },
      { name: "Fire-Roasted Chicken", description: "Half chicken, smoky spice rub, garlic sauce and pickled onions.", price: 22, image: "dish-2.jpg" },
      { name: "Grilled Paneer Skewers", description: "Peppers, onions and paneer with a green chilli glaze.", price: 18, tags: ["Vegetarian"] },
      { name: "Ribeye Steak", description: "300g ribeye, black pepper butter, hand-cut fries.", price: 34 },
    ],
  },
  {
    id: "mains",
    title: "Kitchen Mains",
    items: [
      { name: "Slow-Cooked Beef Curry", description: "Eight-hour braise with whole spices, served with saffron rice.", price: 24, tags: ["Chef's pick"], image: "dish-3.jpg" },
      { name: "Butter Prawns", description: "Tiger prawns in a rich tomato and butter sauce.", price: 26 },
      { name: "Garden Biryani", description: "Layered basmati rice with seasonal vegetables and fried onions.", price: 19, tags: ["Vegetarian", "Spicy"] },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Drinks",
    items: [
      { name: "Cardamom Crème Brûlée", description: "Classic custard with cardamom and a crisp sugar top.", price: 9 },
      { name: "Warm Chocolate Cake", description: "Molten centre, vanilla ice cream.", price: 10 },
      { name: "Fresh Mint Lemonade", description: "Lemon, mint and a pinch of black salt.", price: 5 },
    ],
  },
];

// Dishes shown on the home page.
export const featured: MenuItem[] = menu
  .flatMap((category) => category.items)
  .filter((item) => item.image);
