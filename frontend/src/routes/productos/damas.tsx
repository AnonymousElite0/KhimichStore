import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/productos/damas')({
  component: () => <div>Hello /productos/damas!</div>
})