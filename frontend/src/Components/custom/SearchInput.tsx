import { Input } from '../ui/input'

export function SearchInput({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <Input
      type="search"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="max-w-2xl"
    />
  )
}