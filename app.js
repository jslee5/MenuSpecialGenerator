const menu = {
    _meal: ['Pizza', 'Lasagna', 'Spaghetti', 'Wine', 'Zitti'],
    _price: [8, 10, 6, 12, 4],

  
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial () {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} is for $${this._price}!`
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
  
  };
  
  menu.meal = 'Spaghetti';
 
  menu.price = g8;
 
  
  console.log(menu.todaysSpecial)
