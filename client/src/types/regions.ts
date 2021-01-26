export type regions = {
    id: number,
    path: string,
    name: string
};

export type regionsNode = {
    id: number,
    name: string,
    path: string,
    children?: { [key: number]: regionsNode }
};

/* To store roots */
export type regionsTree = {
    children: { [key: number]: regionsNode }
} | null;
