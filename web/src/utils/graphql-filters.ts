export default function mountQuery() {
  return `
    query {
      allProducts {
        id, name, image_url, price_in_cents, category
      }
    }
  `
}
