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
      ShoppingCartPriceTotal: 0,
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
        const found = ShoppingCart.find((item) => item.ID === pizza.ID);
        if (found) {
          found.quantity += 1;
        } else {
          ShoppingCart.push({ ...pizza, quantity: 1 });
        }
        setStore({ ShoppingCart: ShoppingCart });
      },
      ShoppingCartPriceTotalCalc: () => {
        const store = getStore();
        const ShoppingCart = store.ShoppingCart;
        const total = ShoppingCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setStore({ ShoppingCartPriceTotal: total });
      },
      removeFromCart: (pizzaID) => {
        const store = getStore();
        const ShoppingCart = store.ShoppingCart.filter(
          (item) => item.ID !== pizzaID
        );
        setStore({ ShoppingCart: ShoppingCart });
      },
      addDrink: (drink) => {
        const store = getStore();
        const PizzaOrder = store.PizzaOrder;
        PizzaOrder.drink = drink;
        setStore({ PizzaOrder: PizzaOrder });
      },
      setPizzaOrder: (order) => {
        setStore({ PizzaOrder: order});
      },
    },
  };
};

export default getState;
