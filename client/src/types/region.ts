type regionVertex = {
    [key: number]: string
}

export type region = {
    id: number,
    path: string,
    name: string
}

export type regionsGraph = {
    [key: number]: Set<number>
}

export type regionsTree = {
    vertexes: regionVertex,
    graph: regionsGraph,
    roots: Set<number>
} | null

export type renderVertex = {
    name: string,
}

export type renderTree = {

}

