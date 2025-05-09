import { useEffect, useState, Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/Components/ui/button'
import { fetchProductById } from '@/Lib/api'
import { toast } from 'sonner'
import { Skeleton } from '@/Components/ui/skeleton'

export function DetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id!)
        setProduct(data)
      } catch (error) {
        toast.error("Failed to fetch product details")
        navigate('/')
      }
    }

    loadProduct()
  }, [id, navigate])

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)}
        className="mb-8"
      >
        ← Back to Search
      </Button>

      {product ? (
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="sticky top-4">
            <Suspense fallback={<Skeleton className="w-full aspect-square rounded-lg" />}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full max-h-[500px] object-contain rounded-lg border"
                loading="lazy"
              />
            </Suspense>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-600">Brand:</span>
                <span>{product.brand}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-600">Category:</span>
                <span className="capitalize">{product.category.toLowerCase()}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h2 className="font-medium text-lg mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="w-full aspect-square rounded-lg" />
          <div className="space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-8 w-1/4" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      )}
    </div>
  )
}