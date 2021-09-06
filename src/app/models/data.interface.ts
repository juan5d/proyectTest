export interface InterfaceData {
    page:       number;
    perPage:    number;
    total:      number;
    totalPages: number;
    data:       User[];
    support:    Support;
}

export interface User {
    id?:        number;
    email:     string;
    first_name: string;
    last_name:  string;
    avatar:    string;
}

interface Support {
    url:  string;
    text: string;
}
