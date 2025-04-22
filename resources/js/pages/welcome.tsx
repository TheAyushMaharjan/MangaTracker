import LoginForm from '@/pages/auth/login';
import RegisterForm from '@/pages/auth/register';
import { useState } from 'react';

const Index = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    return (
        <div className="dark:bg-manga-dark animate-fade-in flex min-h-screen flex-col bg-gray-50">
            <div className="flex flex-1 items-center justify-center p-4">
                <div className="grid w-full max-w-4xl gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h1 className="text-manga-primary text-4xl font-bold">MangaVerse</h1>
                            <p className="mt-2 text-xl">Your AI-Powered Manga Tracking Platform</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-manga-primary/10 rounded-full p-2">
                                    <svg
                                        className="text-manga-primary h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg">Track your manga collection</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="bg-manga-primary/10 rounded-full p-2">
                                    <svg
                                        className="text-manga-primary h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg">Get AI-powered recommendations</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="bg-manga-primary/10 rounded-full p-2">
                                    <svg
                                        className="text-manga-primary h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg">Share your collections with others</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
                        <div className="grid w-full grid-cols-2">
                            <button
                                className={`p-2 ${activeTab === 'login' ? 'bg-manga-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                                onClick={() => setActiveTab('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`p-2 ${activeTab === 'register' ? 'bg-manga-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                                onClick={() => setActiveTab('register')}
                            >
                                Register
                            </button>
                        </div>
                        <div className="p-4">
                            {activeTab === 'login' && <LoginForm canResetPassword={true} />}
                            {activeTab === 'register' && <RegisterForm />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
