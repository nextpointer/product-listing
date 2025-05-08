import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/Components/ui/button'
import { fetchProductById } from '@/Lib/api'
import {toast} from 'sonner'

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
        toast.error("Failed to fetch products")
        navigate('/')
      }
    }

    loadProduct()
  }, [id, navigate, toast])

  if (!product) return null

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Button variant="outline" onClick={() => navigate(-1)}>
        ← Back to Search
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-96 object-contain rounded-lg"
        />
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price}</p>
          <div className="space-y-2">
            <p><span className="font-medium">Brand:</span> {product.brand}</p>
            <p><span className="font-medium">Category:</span> {product.category}</p>
          </div>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  )
}