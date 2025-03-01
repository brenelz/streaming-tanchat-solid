import { createFileRoute } from '@tanstack/solid-router'
import { createResource } from 'solid-js'

function getNames() {
    return fetch('/api/demo-names').then((res) => res.json())
}

export const Route = createFileRoute('/demo/start/api-request')({
    component: Home,
})

function Home() {
    const [names] = createResource(getNames);
    return (
        <div class="p-4">
            <div>{names()?.join(', ')}</div>
        </div>
    )
}
