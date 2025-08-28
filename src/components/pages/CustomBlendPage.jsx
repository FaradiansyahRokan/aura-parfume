// src/components/pages/CustomBlendPage.jsx
import React, { useState } from 'react';
import { askAI } from '../../API/aiService';
import { mockScentNotes } from '../../data/mockData';

const CustomBlendPage = () => {
    const [selectedNotes, setSelectedNotes] = useState({ base: [], middle: [], top: [] });
    const [aiAnalysis, setAiAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleNote = (type, note) => setSelectedNotes(prev => ({...prev, [type]: prev[type].includes(note) ? prev[type].filter(n => n !== note) : [...prev[type], note]}));
    
    const handleAnalyzeBlend = async () => {
        const prompt = `Analisis blend parfum ini: Base notes - ${selectedNotes.base.join(', ') || 'tidak ada'}; Middle notes - ${selectedNotes.middle.join(', ') || 'tidak ada'}; Top notes - ${selectedNotes.top.join(', ') || 'tidak ada'}. Berikan deskripsi karakter dan impresi dari parfum ini, dan juga berikan nama yang cocok, dan jika sudah selesai menganalisis jangan bertanya apapun lagi.`;
        setIsLoading(true);
        setAiAnalysis('');
        const response = await askAI(prompt);
        setAiAnalysis(response);
        setIsLoading(false);
    };

    const NoteSelector = ({ title, type, notes }) => (
        <div className="mb-8">
            <h3 className="text-2xl font-semibold font-serif text-black border-b-2 border-gray-300 pb-2 mb-4 tracking-wider">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {notes.map(note => <button key={note} onClick={() => toggleNote(type, note)} className={`px-4 py-2 transition-all duration-300 text-base border font-sans ${selectedNotes[type].includes(note) ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-400 hover:bg-gray-100'}`}>{note}</button>)}
            </div>
        </div>
    );
    
    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-black fade-in pt-40">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-semibold font-serif tracking-wider">Laboratorium Aroma Anda</h2>
                    <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto font-sans">Ciptakan wewangian yang merepresentasikan diri Anda.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <NoteSelector title="Base Notes" type="base" notes={mockScentNotes.base} />
                        <NoteSelector title="Middle Notes" type="middle" notes={mockScentNotes.middle} />
                        <NoteSelector title="Top Notes" type="top" notes={mockScentNotes.top} />
                    </div>
                    <div className="bg-white p-8 sticky top-32 self-start border-2 border-black">
                        <h3 className="text-3xl font-semibold font-serif mb-6 tracking-wider">Racikan Anda</h3>
                        <div className="space-y-4 mb-8 text-gray-700 text-lg font-sans">
                            <p><strong className="text-black w-24 inline-block">Base:</strong> {selectedNotes.base.join(', ') || 'Pilih aroma'}</p>
                            <p><strong className="text-black w-24 inline-block">Middle:</strong> {selectedNotes.middle.join(', ') || 'Pilih aroma'}</p>
                            <p><strong className="text-black w-24 inline-block">Top:</strong> {selectedNotes.top.join(', ') || 'Pilih aroma'}</p>
                        </div>
                        <button onClick={handleAnalyzeBlend} disabled={isLoading || !selectedNotes.base.length || !selectedNotes.middle.length || !selectedNotes.top.length} className="w-full bg-black text-white font-bold py-4 px-6 text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-sans">
                            {isLoading ? 'Menganalisis...' : 'Dapatkan Analisis AI'}
                        </button>
                        {aiAnalysis && (
                            <div className="mt-8 border-t border-gray-300 pt-6">
                                <h4 className="text-xl font-semibold font-serif mb-3 tracking-wider">Analisis AI Sommelier:</h4>
                                <p className="text-lg text-gray-600 italic font-sans">{aiAnalysis}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomBlendPage;