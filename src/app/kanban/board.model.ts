export interface Board {
    id?: string;
    title?: string;
    priority?: number;
    tasks?: BoardTask[];
}

export interface BoardTask {
    description?: string;
    label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}