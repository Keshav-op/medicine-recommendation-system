export interface Symptom {
    id: string;
    name: string;
}

export interface Medicine {
    id: string;
    name: string;
    description: string;
    dosage: string;
    sideEffects: string[];
    warnings: string[];
    category: string;
}

export interface Recommendation {
    id: string;
    symptoms: Symptom[];
    medicines: Medicine[];
    createdAt: Date;
    aiExplanation: string;
}

export interface SearchHistory {
    id: string;
    symptoms: Symptom[];
    timestamp: Date;
}