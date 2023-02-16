export type Trainer = {

    id: number;
    name: string;
    education: string;
    qualification: string;
    since: string;
    club: string;
    specialization?: string;
    winnings?: {label: string, text: string[]}[]
    phone: string;
    email: string;
    trainings: string[];
}
