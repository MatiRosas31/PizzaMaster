const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      ingredients: [
        "Pepperoni",
        "Ananá",
        "Jamón",
        "Champiñones",
        "Aceitunas",
        "Pimientos",
        "Cebolla",
        "Tomate",
        "Queso extra",
        "Salchicha",
        "Tocino",
        "Pollo",
        "Carne molida",
        "Albahaca",
        "Espinaca",
        "Piña",
        "Atún",
        "Maíz",
        "Jalapeños",
      ],
      selectedIngredients: [],
      ShoppingCart: [],
      message: null,
      PizzaOrder: {},
    },
    actions: {
      addIngredient: (ingredient) => {
        const store = getStore();
        const selectedIngredients = store.selectedIngredients;
        if (!selectedIngredients.includes(ingredient)) {
          selectedIngredients.push(ingredient);
          setStore({ selectedIngredients: selectedIngredients });
        }
      },
      removeIngredient: (ingredient) => {
        const store = getStore();
        const selectedIngredients = store.selectedIngredients;
        const newIngredients = selectedIngredients.filter(
          (i) => i !== ingredient
        );
        setStore({ selectedIngredients: newIngredients });
      },
      removeAllIngredients: () => {
        setStore({ selectedIngredients: [] });
      },
      addToCart: (pizza) => {
        const store = getStore();
        const ShoppingCart = [...store.ShoppingCart];
        const found = ShoppingCart.find((item) => item[0].ID === pizza.ID);
        if (found) {
          found.push(pizza);
        } else {
          ShoppingCart.push([pizza]);
        }
        setStore({ ShoppingCart: ShoppingCart });
      },
      removeFromCart: (pizzaID) => {
        const store = getStore();
        const ShoppingCart = store.ShoppingCart.filter(
          (item) => item[0].ID !== pizzaID
        );
        setStore({ ShoppingCart: ShoppingCart });
      },
      setPizzaOrder: (order) => {
        setStore({ PizzaOrder: order,});
      },
    },
  };
};

export default getState;
