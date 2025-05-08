import { Card } from '../ui/card'

export function ProductCard({ product }: { product: any }) {
  return (
    <Card className="cursor-pointer transition-shadow hover:shadow-lg">
      <div className="p-4 space-y-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded-lg"
        />
        <div className="space-y-2">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
          <p className="font-semibold">${product.price}</p>
        </div>
      </div>
    </Card>
  )
}