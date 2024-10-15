import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/productos/caballeros')({
  component: () => <div>Hello /productos/caballeros!</div>
})