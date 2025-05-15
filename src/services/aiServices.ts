import { Medicine, Recommendation, Symptom } from '../types';

// Mock AI API response
const generateMockRecommendation = (symptoms: Symptom[]): Promise<Recommendation> => {
    // This simulates an API call to an AI service
    return new Promise((resolve) => {
        setTimeout(() => {
            const medicines: Medicine[] = [
                {
                    id: '1',
                    name: 'Paracetamol',
                    description: 'An analgesic and antipyretic used to treat fever and mild to moderate pain.',
                    dosage: '500-1000mg every 4-6 hours as needed (max 4g per day)',
                    sideEffects: ['Nausea', 'Rash', 'Headache'],
                    warnings: ['May cause liver damage in high doses', 'Avoid alcohol consumption'],
                    category: 'Analgesic',
                },
                {
                    id: '2',
                    name: 'Ibuprofen',
                    description: 'Non-steroidal anti-inflammatory drug (NSAID) used to treat pain, inflammation, and fever.',
                    dosage: '200-400mg every 4-6 hours as needed (max 1200mg per day)',
                    sideEffects: ['Stomach upset', 'Heartburn', 'Dizziness'],
                    warnings: ['Not recommended for people with stomach ulcers', 'May increase risk of heart attack or stroke'],
                    category: 'NSAID',
                },
                {
                    id: '3',
                    name: 'Cetirizine',
                    description: 'An antihistamine used to relieve allergy symptoms such as runny nose, sneezing, and itching.',
                    dosage: '10mg once daily',
                    sideEffects: ['Drowsiness', 'Dry mouth', 'Fatigue'],
                    warnings: ['May cause drowsiness', 'Avoid alcohol'],
                    category: 'Antihistamine',
                },
            ].slice(0, 1 + Math.floor(Math.random() * 3)); // Random selection of 1-3 medicines

            const aiExplanation = `Based on your symptoms (${symptoms.map(s => s.name).join(', ')}), 
      I recommend the following medication(s). These medications target the specific symptoms you're experiencing. 
      Monitor your condition and consult a healthcare professional if symptoms persist or worsen.`;

            resolve({
                id: Math.random().toString(36).substring(2, 9),
                symptoms,
                medicines,
                createdAt: new Date(),
                aiExplanation,
            });
        }, 1500); // Simulate network delay
    });
};

export const getRecommendation = async (symptoms: Symptom[]): Promise<Recommendation> => {
    // In a real implementation, this would call an actual AI API
    return generateMockRecommendation(symptoms);
};

export const getCommonSymptoms = (): Symptom[] => {
    return [
        { id: '1', name: 'Headache' },
        { id: '2', name: 'Fever' },
        { id: '3', name: 'Cough' },
        { id: '4', name: 'Sore Throat' },
        { id: '5', name: 'Runny Nose' },
        { id: '6', name: 'Body Ache' },
        { id: '7', name: 'Fatigue' },
        { id: '8', name: 'Nausea' },
        { id: '9', name: 'Dizziness' },
        { id: '10', name: 'Shortness of Breath' },
        { id: '11', name: 'Chest Pain' },
        { id: '12', name: 'Abdominal Pain' },
        { id: '13', name: 'Diarrhea' },
        { id: '14', name: 'Vomiting' },
        { id: '15', name: 'Joint Pain' },
    ];
};