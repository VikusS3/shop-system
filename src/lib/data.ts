import products from '../data/products.json';

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  video: string;
  seller: string;
  whatsapp: string;
  price: number;
  currency: string;
  category: string;
  type: string;
  tags: string[];
  rating: number;
  featured: boolean;
  createdAt: string;
}

export function getAllProducts(): Product[] {
  return products as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return (products as Product[]).find(p => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return (products as Product[]).find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return (products as Product[]).filter(p => p.featured);
}

export function getHotProduct(): Product | undefined {
  const sorted = [...(products as Product[])].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return sorted[0];
}

export function getCategories(): string[] {
  const cats = new Set((products as Product[]).map(p => p.category));
  return Array.from(cats).sort();
}

export function getTypes(): string[] {
  const types = new Set((products as Product[]).map(p => p.type));
  return Array.from(types);
}

export function getSellers(): string[] {
  const sellers = new Set((products as Product[]).map(p => p.seller));
  return Array.from(sellers).sort();
}

export function getProductsByCategory(category: string): Product[] {
  return (products as Product[]).filter(p => p.category === category);
}

export function getProductsByType(type: string): Product[] {
  return (products as Product[]).filter(p => p.type === type);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return (products as Product[]).filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q)) ||
    p.category.toLowerCase().includes(q) ||
    p.seller.toLowerCase().includes(q)
  );
}

export function getStats() {
  const all = products as Product[];
  return {
    totalProducts: all.length,
    totalSellers: new Set(all.map(p => p.seller)).size,
    totalCategories: new Set(all.map(p => p.category)).size,
    totalTypes: new Set(all.map(p => p.type)).size,
  };
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return (products as Product[])
    .filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(t => product.tags.includes(t))))
    .slice(0, limit);
}

export function formatPrice(price: number, currency: string): string {
  const symbols: Record<string, string> = { USD: '$', EUR: '€', GBP: '£', PEN: 'S/' };
  const symbol = symbols[currency] || currency + ' ';
  return `${symbol}${price.toLocaleString()}`;
}

export function getWhatsAppUrl(number: string, message: string): string {
  const clean = number.replace(/[^0-9]/g, '');
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

export function slugify(text: string): string {
  const map: Record<string, string> = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
    'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u',
    'ñ': 'n', 'ç': 'c',
  };
  return text.toLowerCase()
    .split('').map(c => map[c] || c).join('')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
