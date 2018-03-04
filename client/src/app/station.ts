export class Station {
    accessible: boolean;
    name: string;
    lines: {
        active: string[],
        all: {
            blue: boolean,
            brown: boolean,
            green: boolean,
            orange: boolean,
            pink: boolean,
            purple: boolean,
            red: boolean,
            yellow: boolean
        }
    };
    location: string;
    stop_id: number;
    map_id: number;
};