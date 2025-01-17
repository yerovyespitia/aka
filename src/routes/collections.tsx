import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collections')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/collections"!</div>
}
