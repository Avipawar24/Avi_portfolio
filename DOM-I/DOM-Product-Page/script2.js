// function createProductCard(product) {
//     const card = document.createElement('div');
//     card.className = 'card';

//     const img = document.createElement('img');
//     img.src = product.image;
//     card.appendChild(img);

//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body';

//     const title = document.createElement('h2');
//     title.className = 'card-title';
//     title.textContent = product.title;
//     cardBody.appendChild(title);

//     const price = document.createElement('p');
//     price.className = 'card-price';
//     price.textContent = `$${product.price}`;
//     cardBody.appendChild(price);

//     const description = document.createElement('p');
//     description.className = 'card-description';
//     description.textContent = product.description;
//     cardBody.appendChild(description);

//     const category = document.createElement('span');
//     category.className = 'card-category';
//     category.textContent = product.category;
//     cardBody.appendChild(category);

//     const rating = document.createElement('p');
//     rating.className = 'card-rating';
//     rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
//     cardBody.appendChild(rating);

//     card.appendChild(cardBody);
    
//     return card;
// }

// const productsContainer = document.getElementById('products-container');
// products.forEach(product => {
//     const productCard = createProductCard(product);
//     productsContainer.appendChild(productCard);
// });