// src/components/custom/ProductCard.tsx

/**
 * Product Card Component
 * 
 * Features:
 * - Smooth hover animations
 * - Lazy image loading with skeleton
 * - Responsive design
 * - View Transitions API support
 */

import { useState } from 'react'
import { Card } from '@/Components/ui/card'
import { Skeleton } from '@/Components/ui/skeleton'

export function ProductCard({ product, onClick }: { product: any; onClick: () => void }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl h-full flex flex-col"
      onClick={onClick}
      style={{
        viewTransitionName: `product-${product.id}`,
      }}
    >
      {/* Image Container with Loading State */}
      <div className="relative aspect-square bg-muted/50">
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="font-medium line-clamp-2 text-foreground/90 group-hover:text-foreground transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.brand}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-semibold text-primary">${product.price.toFixed(2)}</p>
          <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
            {product.category}
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  )
}