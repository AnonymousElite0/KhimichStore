// src/components/Cod3Genius.tsx


export function Cod3Genius() {
    return (
        <div className="bg-white p-2 rounded-lg shadow-lg w-auto h-auto flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Cod3Genius <span className="text-pink-500">Inc</span></h2>
            <div className="flex-shrink-0">
                    <img
                        src="assets/images/CG.png"
                        alt="Michelle Fernández"
                        className="w-40 h-40 rounded-lg shadow-lg"
                    />
            </div>
            <div className="flex-1 mr-4 mt-4">
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                            El desarrollo de nuestro ecosistema administrativo fue realizado por Cod3Genius Inc.
                            liderado por su fundador <span className="text-pink-500">Jussepe Fernández</span> . <br/> Con sus talentos nos ha dado la mejor calidad de tecnologia..
                </p>
            </div>
        </div>
    );
};