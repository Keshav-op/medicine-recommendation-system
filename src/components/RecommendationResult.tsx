import React from 'react';
import { Recommendation } from '../types';
import { Lightbulb, AlertCircle, Info, Clock } from 'lucide-react';

interface RecommendationResultProps {
    recommendation: Recommendation;
    onNewSearch: () => void;
}

const RecommendationResult: React.FC<RecommendationResultProps> = ({
    recommendation,
    onNewSearch
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <h2 className="text-xl font-bold text-white">Medicine Recommendations</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    {recommendation.symptoms.map(symptom => (
                        <span
                            key={symptom.id}
                            className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                        >
                            {symptom.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-6">
                <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                        <Lightbulb className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{recommendation.aiExplanation}</p>
                    </div>
                </div>

                <h3 className="text-lg font-medium text-gray-800 mb-4">Recommended Medications</h3>

                <div className="space-y-4">
                    {recommendation.medicines.map(medicine => (
                        <div key={medicine.id} className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-50 p-3 border-b">
                                <h4 className="font-medium text-gray-800">{medicine.name}</h4>
                                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                    {medicine.category}
                                </span>
                            </div>

                            <div className="p-4">
                                <p className="text-gray-700 mb-3">{medicine.description}</p>

                                <div className="mb-3">
                                    <h5 className="text-sm font-medium text-gray-700 flex items-center mb-1">
                                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                                        Dosage
                                    </h5>
                                    <p className="text-gray-600 text-sm pl-5">{medicine.dosage}</p>
                                </div>

                                <div className="mb-3">
                                    <h5 className="text-sm font-medium text-gray-700 flex items-center mb-1">
                                        <Info className="h-4 w-4 mr-1 text-yellow-500" />
                                        Side Effects
                                    </h5>
                                    <ul className="text-sm text-gray-600 pl-5">
                                        {medicine.sideEffects.map((effect, index) => (
                                            <li key={index} className="list-disc ml-4">{effect}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-sm font-medium text-gray-700 flex items-center mb-1">
                                        <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                                        Warnings
                                    </h5>
                                    <ul className="text-sm text-gray-600 pl-5">
                                        {medicine.warnings.map((warning, index) => (
                                            <li key={index} className="list-disc ml-4">{warning}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={onNewSearch}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                        Start New Search
                    </button>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800 flex items-start">
                        <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                        <span>
                            <strong>Important:</strong> This is an AI recommendation only. Always consult with a healthcare
                            professional before taking any medication.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RecommendationResult;