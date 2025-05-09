// src/pages/SearchPage.tsx

/**
 * Product Search Page
 * 
 * Features:
 * - Debounced search input
 * - Responsive grid layout
 * - Loading skeletons
 * - Error handling
 */

import { useEffect, useState } from 'react'
import { useDebounce } from '@/Hooks/useDebounce'
import { ProductCard } from '@/Components/custom/ProductCard'
import { ProductSkeleton } from '@/Components/custom/Skeletons'
import { SearchInput } from '@/Components/custom/SearchInput'
import { fetchProducts } from '@/Lib/api'
import { toast } from 'sonner'

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const debouncedSearch = useDebounce(searchTerm, 400)

  // Initial product load
  useEffect(() => {
    const loadInitialProducts = async () => {
      try {
        const data = await fetchProducts('')
        setProducts(data)
      } catch (error) {
        toast.error('Failed to load products')
      } finally {
        setIsLoading(false)
      }
    }

    loadInitialProducts()
  }, [])

  // Search effect
  useEffect(() => {
    const searchProducts = async () => {
      if (!debouncedSearch) return

      try {
        setIsLoading(true)
        const data = await fetchProducts(debouncedSearch)
        setProducts(data)
      } catch (error) {
        toast.error('Search failed')
      } finally {
        setIsLoading(false)
      }
    }

    searchProducts()
  }, [debouncedSearch])

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Search Header */}
      <header className="mb-12 text-center">
        <div className="max-w-2xl mx-auto">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
      </header>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
        {isLoading ? (
          Array(8).fill(0).map((_, i) => <ProductSkeleton key={i} />)
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => window.location.assign(`/products/${product.id}`)}
            />
          ))
        )}
      </section>

      {/* Empty State */}
      {!isLoading && products.length === 0 && (
        <div className="text-center py-24">
          <div className="text-muted-foreground mb-4 text-6xl">🕳️</div>
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground">
            {searchTerm ? `No results for "${searchTerm}"` : 'Catalog is empty'}
          </p>
        </div>
      )}
    </div>
  )
}