export interface TableProps {
    repos: Repo[],
}

export interface SearchBarProps {
    callback: Function,
    ref?: any,
}

export interface Repo {
    id: number,
    name: string,
}