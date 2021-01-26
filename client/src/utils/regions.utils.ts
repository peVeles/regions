import { regions, regionsTree } from "../types/regions";

export const buildTreeByRegions = (regions: regions[]): regionsTree => {
    /* Use object instead of arrays to complete build in linear time */

    const resolvePath = (root: regionsTree, path: string, region: regions) => {
        path.split('.').reduce(function(pathObject : any, pathName: any){
            pathObject.children[pathName] = pathObject.children[pathName] || {...region, children: {}};
            return pathObject.children[pathName];
        }, root);
    }

    return regions.reduce((root: any, region: regions) => {
        resolvePath(root, region.path, region);
        return root;
    }, /* root of the roots */ { children: {} });
}