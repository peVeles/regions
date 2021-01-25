import { region, regionsGraph, regionsTree } from "../types/region";

export const buildGraphByRegions = (regions: region[]): regionsTree => {
    if(!Array.isArray(regions))
        return regions;

    /* Here we build graph (adjacency list) by data, gotten from server */

    const graph: regionsGraph = {};
    const roots = new Set<number>();

    regions.forEach(region => {
        // Taking path
        const vertexes = region.path.split('.').map(r => { return +r });
        // Adding root vertex
        vertexes && roots.add(vertexes[0]);
        // Filling the adjacency list using the data of the current path
        for(let i = 0; i < vertexes.length - 1; ++i) {
            const from = vertexes[i]; const to = vertexes[i + 1];
            !graph[from] ? graph[from] = new Set([to]) : graph[from].add(to);
        }
        // Taking into account, that last vertex may not have any children
        !graph[vertexes[vertexes.length - 1]] && (graph[vertexes[vertexes.length - 1]] = new Set());
    });

    return {
        vertexes: regions.reduce((obj:{[key: number]: string}, item) => (obj[item.id] = item.name, obj) ,{}),
        graph,
        roots
    }
}