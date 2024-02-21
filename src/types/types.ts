export interface Api {
    race: Race[],
    classes: Classes[],
    background: Background[],
}
export interface Race {
    id: number,
    icon?: string,
    name?: string,
    features?: any,
    subrase?: object,
    description?: string,
}
export interface Classes {
    id: number,
    icon?: string,
    name?: string,
    description?: string,
}
export interface Background {
    id: number,
    icon?: string,
    name?: string,
    skils?: Array<string>,
    description?: string,
}