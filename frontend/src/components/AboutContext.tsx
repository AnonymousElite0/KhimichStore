// src/components/AboutContext.tsx

import { KhimichStore } from '../components/khimichStore';
import { Founder } from '../components/founder';
import { Cod3Genius } from '../components/Cod3Genius';

export function AboutContext() {
    return (
        <div className="min-h-screen mt-1 flex items-center justify-center">
            <div className="max-w-4xl w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/3">
                    <div className="w-full h-full aspect-w-1 aspect-h-1">
                        <KhimichStore />
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="w-full h-full aspect-w-1 aspect-h-1">
                        <Founder />
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="w-full h-full aspect-w-1 aspect-h-1">
                        <Cod3Genius />
                    </div>
                </div>
            </div>
        </div>
    );
}