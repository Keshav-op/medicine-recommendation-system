import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { Symptom } from '../types';
import { getCommonSymptoms } from '../services/aiService';

interface SymptomSelectorProps {
    onSubmit: (symptoms: Symptom[]) => void;
    isLoading: boolean;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({ onSubmit, isLoading }) => {
    const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const commonSymptoms = getCommonSymptoms();

    const filteredSymptoms = commonSymptoms.filter(
        symptom =>
            !selectedSymptoms.some(s => s.id === symptom.id) &&
            symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddSymptom = (symptom: Symptom) => {
        setSelectedSymptoms([...selectedSymptoms, symptom]);
        setSearchTerm('');
    };

    const handleRemoveSymptom = (id: string) => {
        setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== id));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedSymptoms.length > 0) {
            onSubmit(selectedSymptoms);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">What are your symptoms?</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type a symptom..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    {searchTerm && (
                        <div className="mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {filteredSymptoms.length > 0 ? (
                                filteredSymptoms.map(symptom => (
                                    <div
                                        key={symptom.id}
                                        className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                        onClick={() => handleAddSymptom(symptom)}
                                    >
                                        <PlusCircle className="h-4 w-4 text-blue-500 mr-2" />
                                        <span>{symptom.name}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="p-2 text-gray-500">No matching symptoms found</div>
                            )}
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {selectedSymptoms.map(symptom => (
                            <div
                                key={symptom.id}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                            >
                                <span>{symptom.name}</span>
                                <button
                                    type="button"
                                    className="ml-2 text-blue-600 hover:text-blue-800"
                                    onClick={() => handleRemoveSymptom(symptom.id)}
                                    disabled={isLoading}
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                        {selectedSymptoms.length === 0 && (
                            <div className="text-gray-500 text-sm italic">No symptoms selected yet</div>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className={`w-full py-3 rounded-lg font-medium text-white transition-colors duration-200 ${selectedSymptoms.length > 0
                            ? 'bg-blue-500 hover:bg-blue-600'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                    disabled={selectedSymptoms.length === 0 || isLoading}
                >
                    {isLoading ? 'Analyzing Symptoms...' : 'Get Recommendations'}
                </button>
            </form>
        </div>
    );
};

export default SymptomSelector;