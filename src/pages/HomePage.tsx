import React, { useState } from 'react';
import SymptomSelector from '../components/SymptomSelector';
import RecommendationResult from '../components/RecommendationResult';
import { Recommendation, Symptom } from '../types';
import { getRecommendation } from '../services/aiService';
import { Activity, Stethoscope, ShieldAlert, BarChart4 } from 'lucide-react';

const HomePage: React.FC = () => {
    const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSymptomSubmit = async (symptoms: Symptom[]) => {
        setLoading(true);
        try {
            const result = await getRecommendation(symptoms);
            setRecommendation(result);
        } catch (error) {
            console.error('Error getting recommendation:', error);
            // Handle error state
        } finally {
            setLoading(false);
        }
    };

    const handleNewSearch = () => {
        setRecommendation(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        AI-Powered Medicine Recommendations
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-50">
                        Enter your symptoms and get personalized medicine recommendations powered by artificial intelligence.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    {!recommendation ? (
                        <SymptomSelector onSubmit={handleSymptomSubmit} isLoading={loading} />
                    ) : (
                        <RecommendationResult
                            recommendation={recommendation}
                            onNewSearch={handleNewSearch}
                        />
                    )}
                </div>

                {!recommendation && !loading && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
                            How It Works
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <Activity className="h-8 w-8 text-blue-500" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Enter Symptoms</h3>
                                <p className="text-gray-600">
                                    Tell us about your symptoms using our easy symptom selector.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <BarChart4 className="h-8 w-8 text-green-500" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">AI Analysis</h3>
                                <p className="text-gray-600">
                                    Our AI analyzes your symptoms using advanced medical algorithms.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <Stethoscope className="h-8 w-8 text-purple-500" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Get Recommendations</h3>
                                <p className="text-gray-600">
                                    Receive personalized medicine recommendations based on your symptoms.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <ShieldAlert className="h-8 w-8 text-red-500" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Consult Doctor</h3>
                                <p className="text-gray-600">
                                    Always consult with a healthcare professional before taking any medication.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;