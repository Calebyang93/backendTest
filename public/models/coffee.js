function getCoffee(coffee) {
    return {
        name: coffee.title,
        price: coffee.price,
        rating: coffee.rating,
        description: coffee.description,
        image: coffee.image,
        id: coffee.id,
    };
}