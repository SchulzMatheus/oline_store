
export async function getCategories() { 
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery( categoryId, query ) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  return response.json();
} 

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
