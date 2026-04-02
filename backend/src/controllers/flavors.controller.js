export function listFlavors(_req, res) {
  res.json([
    { id: 1, name: 'Caramel Bloom', subtitle: 'Floral caramel silk', price: '$5.90' },
    { id: 2, name: 'Berry Velvet', subtitle: 'Rich berry cream', price: '$6.40' },
    { id: 3, name: 'Vanilla Gold', subtitle: 'Classic luxury vanilla', price: '$5.50' },
    { id: 4, name: 'Hazelnut Dream', subtitle: 'Toasted nut elegance', price: '$6.20' },
    { id: 5, name: 'Pistachio Muse', subtitle: 'Soft green premium note', price: '$6.60' },
    { id: 6, name: 'Chocolate Silk', subtitle: 'Dense dark cocoa cream', price: '$6.10' }
  ]);
}
