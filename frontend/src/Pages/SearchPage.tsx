import { useEffect, useState } from 'react'
import { useDebounce } from '@/Hooks/useDebounce'
import { ProductCard } from '@/Components/custom/ProductCard'
import { ProductSkeleton } from '@/Components/custom/Skeletons'
import { SearchInput } from '@/Components/custom/SearchInput'
import { fetchProducts } from '@/Lib/api'
import { toast } from "sonner"

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const debouncedSearch = useDebounce(searchTerm)


  useEffect(() => {
    const searchProducts = async () => {
      try {
        setIsLoading(true)
        const data = await fetchProducts(debouncedSearch)
        setProducts(data)
      } catch (error) {
        toast.error("Failed to fetch products")
      } finally {
        setIsLoading(false)
      }
    }

    if (debouncedSearch) searchProducts()
  }, [debouncedSearch, toast])

  return (
    <div className="container mx-auto p-4 space-y-8">
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array(6).fill(0).map((_, i) => <ProductSkeleton key={i} />)
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}