export interface PersonajeI {
    id: number
    name: string
    status: string
    type: string
    species: string
    gender: string
    origin: { name: string, url: string }
    location: { name: string, url: string }
    image: string
    episode: any[]
    url: string
    created: string
}