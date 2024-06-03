export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "00",
		category: "all",
	},
	{
		id: "01",
		category: "Breakfast",
	},
	{
		id: "02",
		category: "Lunch",
	},
	{
		id: "03",
		category: "Dinner",
	},
	{
		id: "04",
		category: "Dessert",
	},
	{
		id: "05",
		category: "Turkish",
	},
	{
		id: "06",
		category: "Asian",
	},
	{
		id: "07",
		category: "Italian",
	},
	
];

export let recipeList = [
	
];


export const recipes_DB = [
	{
	  id: "01",
	  name: "Simit",
	  category: "Breakfast",
	  ingredients: ["Flour", "Yeast", "Water", "Sesame Seeds"],
	  time: "2 hours",
	  difficulty: "Easy",
	  calories: "250 cal",
	  color: "#ffd700",
	  description:
		"A popular Turkish street food, simit is a circular bread encrusted with sesame seeds, typically enjoyed with tea.",
	  steps: [
		"Prepare the dough by mixing flour, yeast, and water. Knead until smooth.",
		"Divide the dough into small portions and shape them into rings.",
		"Dip the rings in water and then sesame seeds, ensuring they are well coated.",
		"Bake the simits in the oven until golden brown and crispy.",
		"Allow to cool slightly before serving with tea or your favorite spread.",
	  ],
	},
	{
	  id: "02",
	  name: "Congee",
	  category: "Breakfast",
	  ingredients: ["Rice", "Water", "Ginger", "Scallions"],
	  time: "1 hour",
	  difficulty: "Medium",
	  calories: "200 cal",
	  color: "#00b894",
	  description:
		"A traditional Asian rice porridge, congee is often served as a comforting breakfast dish, customizable with various toppings.",
	  steps: [
		"Rinse the rice thoroughly and combine with water in a pot.",
		"Bring the mixture to a boil, then reduce heat and simmer until the rice breaks down and thickens.",
		"Add grated ginger and chopped scallions for flavor.",
		"Serve hot with your choice of toppings, such as boiled eggs, soy sauce, or pickled vegetables.",
	  ],
	},
	{
	  id: "03",
	  name: "Frittata",
	  category: "Breakfast",
	  ingredients: ["Eggs", "Cheese", "Vegetables", "Herbs"],
	  time: "30 mins",
	  difficulty: "Easy",
	  calories: "300 cal",
	  color: "#ffa07a",
	  description:
		"An Italian-style omelette, frittata is made with eggs, cheese, and a variety of vegetables, perfect for a hearty breakfast or brunch.",
	  steps: [
		"Whisk eggs in a bowl and season with salt and pepper.",
		"Add grated cheese, chopped vegetables, and herbs to the egg mixture.",
		"Heat oil in a skillet and pour in the egg mixture.",
		"Cook until the edges are set, then transfer to the oven to finish cooking.",
		"Slice and serve the frittata warm, garnished with fresh herbs if desired.",
	  ],
	},
	{
		id: "04",
		name: "Caesar Salad",
		category: "Lunch",
		ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
		time: "15 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#6c5ce7",
		description:
		  "A classic salad made with crisp romaine lettuce, crunchy croutons, tangy Parmesan cheese, and a creamy Caesar dressing.",
		steps: [
		  "Tear or chop the romaine lettuce into bite-sized pieces and place in a large bowl.",
		  "Add croutons and grated Parmesan cheese to the bowl.",
		  "Drizzle Caesar dressing over the salad and toss until well coated.",
		  "Serve immediately as a light and refreshing lunch option.",
		],
	  },
	  {
		id: "05",
		name: "Caprese Panini",
		category: "Lunch",
		ingredients: ["Ciabatta Bread", "Tomato", "Mozzarella Cheese", "Basil Pesto"],
		time: "20 mins",
		difficulty: "Easy",
		calories: "450 cal",
		color: "#6c5ce7",
		description:
		  "A delicious grilled sandwich featuring fresh tomatoes, creamy mozzarella cheese, and fragrant basil pesto, all nestled between slices of crispy ciabatta bread.",
		steps: [
		  "Slice the ciabatta bread horizontally and spread basil pesto on one side of each slice.",
		  "Layer sliced tomatoes and mozzarella cheese on top of the pesto-covered bread.",
		  "Close the sandwich with the other slice of bread and press gently to secure.",
		  "Heat a panini press or skillet over medium heat and grill the sandwich until golden brown and the cheese is melted.",
		  "Slice the panini in half and serve hot as a satisfying lunch option.",
		],
	  },
	  // Dinner
	  {
		id: "06",
		name: "Beef Stroganoff",
		category: "Dinner",
		ingredients: ["Beef Sirloin", "Onion", "Mushrooms", "Sour Cream"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "500 cal",
		color: "#fdcb6e",
		description:
		  "A comforting dish of tender beef sirloin strips cooked with onions and mushrooms in a rich and creamy sauce, served over a bed of egg noodles.",
		steps: [
		  "Slice beef sirloin into thin strips and season with salt and pepper.",
		  "Sauté onions and mushrooms in a large skillet until softened and browned.",
		  "Add beef strips to the skillet and cook until browned on all sides.",
		  "Stir in sour cream and beef broth, then simmer until the sauce thickens.",
		  "Serve hot over cooked egg noodles, garnished with fresh parsley if desired.",
		],
	  },
	  {
		id: "07",
		name: "Chicken Parmesan",
		category: "Dinner",
		ingredients: ["Chicken Breast", "Breadcrumbs", "Marinara Sauce", "Mozzarella Cheese"],
		time: "45 mins",
		difficulty: "Medium",
		calories: "400 cal",
		color: "#fdcb6e",
		description:
		  "Tender chicken breasts coated in seasoned breadcrumbs, topped with marinara sauce and melted mozzarella cheese, served over a bed of spaghetti.",
		steps: [
		  "Dip chicken breasts in beaten egg, then coat with seasoned breadcrumbs.",
		  "Fry chicken breasts in a skillet until golden brown and cooked through.",
		  "Pour marinara sauce over the cooked chicken breasts and top with slices of mozzarella cheese.",
		  "Bake in the oven until the cheese is melted and bubbly.",
		  "Serve hot over cooked spaghetti, garnished with grated Parmesan cheese and fresh basil.",
		],
	  },
	  // Desserts
	  {
		id: "08",
		name: "Chocolate Lava Cake",
		category: "Dessert",
		ingredients: ["Chocolate", "Butter", "Eggs", "Sugar"],
		time: "25 mins",
		difficulty: "Medium",
		calories: "400 cal",
		color: "#fab1a0",
		description:
		  "A decadent dessert featuring a warm and gooey chocolate center surrounded by a moist and fluffy cake, served with a scoop of vanilla ice cream.",
		steps: [
		  "Melt chocolate and butter together in a double boiler until smooth.",
		  "In a separate bowl, whisk together eggs and sugar until light and frothy.",
		  "Fold the melted chocolate mixture into the egg mixture until well combined.",
		  "Pour the batter into greased ramekins and bake in the oven until the edges are set but the center is still gooey.",
		  "Serve immediately with a scoop of vanilla ice cream on top.",
		],
	  },
	  {
		id: "09",
		name: "Tiramisu",
		category: "Dessert",
		ingredients: ["Ladyfingers", "Espresso", "Mascarpone Cheese", "Cocoa Powder"],
		time: "6 hours",
		difficulty: "Hard",
		calories: "350 cal",
		color: "#fab1a0",
		description:
		  "An elegant Italian dessert made with layers of coffee-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder for a touch of bitterness.",
		steps: [
		  "Dip ladyfingers in espresso and arrange them in a single layer in a serving dish.",
		  "Spread a layer of mascarpone cheese over the soaked ladyfingers.",
		  "Repeat the layers until all the ingredients are used up, finishing with a layer of mascarpone cheese on top.",
		  "Cover and refrigerate the tiramisu for at least 6 hours, or overnight, to allow the flavors to meld together.",
		  "Before serving, dust the top of the tiramisu with cocoa powder for a finishing touch.",
		],
	  },
	{
	  id: "10",
	  name: "Köfte",
	  category: "Turkish",
	  ingredients: ["Ground Meat", "Onion", "Bread Crumbs", "Spices"],
	  time: "45 mins",
	  difficulty: "Medium",
	  calories: "350 cal",
	  color: "#d63031",
	  description:
		"Turkish köfte are seasoned meatballs or patties, typically made with ground beef or lamb and served with rice, salad, and bread.",
	  steps: [
		"Mix together ground meat, finely chopped onions, bread crumbs, and spices in a bowl.",
		"Form the mixture into small balls or patties, shaping them with your hands.",
		"Heat oil in a skillet and cook the köfte until browned and cooked through.",
		"Serve hot with rice, salad, and bread, accompanied by yogurt or sauce if desired.",
	  ],
	},
	{
	  id: "11",
	  name: "Dolma",
	  category: "Turkish",
	  ingredients: ["Grape Leaves", "Rice", "Pine Nuts", "Spices"],
	  time: "1 hour 30 mins",
	  difficulty: "Hard",
	  calories: "200 cal",
	  color: "#d64031",
	  description:
		"Dolma, a traditional Turkish dish, consists of grape leaves stuffed with a savory mixture of rice, pine nuts, and spices, often served as an appetizer or main course.",
	  steps: [
		"Prepare the filling by combining cooked rice, pine nuts, herbs, and spices.",
		"Place a grape leaf on a flat surface and add a spoonful of the filling in the center.",
		"Fold the sides of the grape leaf over the filling and roll tightly into a cylindrical shape.",
		"Repeat with the remaining grape leaves and filling, arranging the dolmas in a pot.",
		"Cover with water, place a plate on top to keep them submerged, and simmer until the rice is cooked and the flavors meld together.",
		"Serve hot or cold, garnished with lemon wedges and yogurt if desired.",
	  ],
	},
	{
	  id: "12",
	  name: "Kimchi Fried Rice",
	  category: "Asian",
	  ingredients: ["Cooked Rice", "Kimchi", "Eggs", "Vegetables"],
	  time: "25 mins",
	  difficulty: "Easy",
	  calories: "350 cal",
	  color: "#00cec9",
	  description:
		"A flavorful Korean dish, kimchi fried rice is made by stir-frying cooked rice with kimchi, vegetables, and often topped with a fried egg.",
	  steps: [
		"Heat oil in a skillet and add chopped kimchi along with its juices.",
		"Add cooked rice and stir-fry until heated through and well combined with the kimchi.",
		"Make a well in the center of the skillet and crack an egg into it. Cook until the egg is set to your liking.",
		"Stir everything together, season with soy sauce or gochujang for extra flavor, and serve hot.",
	  ],
	},
	{
	  id: "13",
	  name: "Bibimbap",
	  category: "Asian",
	  ingredients: ["Cooked Rice", "Assorted Vegetables", "Beef", "Fried Egg"],
	  time: "40 mins",
	  difficulty: "Medium",
	  calories: "450 cal",
	  color: "#01dec9",
	  description:
		"A popular Korean mixed rice dish, bibimbap features a colorful array of vegetables, protein, and a fried egg, served with spicy gochujang sauce.",
	  steps: [
		"Prepare various vegetables such as spinach, bean sprouts, carrots, and mushrooms, sautéing each separately until tender.",
		"Season thinly sliced beef with soy sauce, garlic, and sesame oil, then stir-fry until cooked.",
		"Arrange cooked rice in a bowl and top with the cooked vegetables and beef.",
		"Fry an egg until the yolk is still runny, then place it on top of the rice.",
		"Serve immediately with gochujang sauce on the side for mixing.",
	  ],
	},
	{
	  id: "14",
	  name: "Margherita Pizza",
	  category: "Italian",
	  ingredients: ["Pizza Dough", "Tomatoes", "Mozzarella Cheese", "Basil"],
	  time: "1 hour",
	  difficulty: "Hard",
	  calories: "400 cal",
	  color: "#ff7675",
	  description:
		"A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil, representing the colors of the Italian flag.",
	  steps: [
		"Preheat your oven and roll out the pizza dough into a round shape.",
		"Spread a thin layer of tomato sauce over the dough, leaving a border around the edges.",
		"Arrange slices of fresh mozzarella cheese and tomato rounds on top of the sauce.",
		"Sprinkle with torn basil leaves and a drizzle of olive oil.",
		"Bake in the oven until the crust is golden brown and the cheese is bubbly and melted.",
		"Slice the pizza and serve hot, garnished with additional basil leaves if desired.",
	  ],
	},
	{
	  id: "15",
	  name: "Spaghetti Carbonara",
	  category: "Italian",
	  ingredients: ["Spaghetti", "Pancetta", "Eggs", "Parmesan Cheese"],
	  time: "30 mins",
	  difficulty: "Medium",
	  calories: "500 cal",
	  color: "#fd5675",
	  description:
		"A classic Roman pasta dish, spaghetti carbonara is made with pancetta or guanciale, eggs, cheese, and black pepper, resulting in a creamy and savory sauce.",
	  steps: [
		"Cook spaghetti in a pot of salted boiling water until al dente, then drain, reserving some pasta water.",
		"Cook pancetta in a skillet until crispy, then remove from heat.",
		"In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper.",
		"Add the cooked spaghetti to the skillet with the pancetta, then pour in the egg mixture, tossing quickly to coat the pasta and create a creamy sauce.",
		"If needed, add reserved pasta water to achieve desired consistency.",
		"Serve immediately, garnished with additional cheese and black pepper.",
	  ],
	},
  ];
  

export let imgList = [
	{
		id: "01",
		image: require("../assets/images/simit.png"),
		
	},
	{
		id: "02",
		image: require("../assets/images/congee.png"),
	},
	{
		id: "03",
		image: require("../assets/images/frittata.png"),
		
	},
	{
		id: "04",
		image: require("../assets/images/caesarsalad.png"),
		
	},
	{
		id: "05",
		image: require("../assets/images/capresepanini.png"),
		
		
	},
	{
		id: "06",
		image: require("../assets/images/beefstroganoff.png"),
		
		
	},
	{
		id: "07",
		image: require("../assets/images/chickenparmesan.png"),
		
	},
	{
		id: "08",
		image: require("../assets/images/chocolatelavacake.png"),
	},
	{
		id: "09",
		image: require("../assets/images/tiramisu.png"),
	},
	{
		id: "10",
		image: require("../assets/images/kofte.png"),
	},
	{
		id: "11",
		image: require("../assets/images/dolma.png"),
	},
	{
		id: "12",
		image: require("../assets/images/kimchifriedrice.png"),
	},
	{
		id: "13",
		image: require("../assets/images/bibimbap.png"),
	},
	{
		id: "14",
		image: require("../assets/images/margheritapizza.png"),
	},
	{
		id: "15",
		image: require("../assets/images/spaghetticarbonara.png"),
	},
];

export let favRecipeList = [
	
	
];
