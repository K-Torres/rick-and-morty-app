export interface FilterCriteria {
    name: string;
    status: "all" | "alive" | "dead" | "unknown";
    specie: string;
    type: string;
    gender: "all" | "male" | "female" | "genderless" | "unknown";
}
