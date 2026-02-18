
import { AbsoluteFill, useCurrentFrame, interpolate, staticFile } from 'remotion';

export const Outro: React.FC = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 30], [0, 1]);

    return (
        <AbsoluteFill className="bg-[#F5F3FF] flex items-center justify-center text-slate-800">
            <div style={{ opacity }} className="text-center">
                <img src={staticFile("seneka-logo.png")} alt="SENEKA" className="h-32 mx-auto mb-6 object-contain" />
                <p className="text-3xl font-light tracking-wide">seneka.com.tr</p>
            </div>
        </AbsoluteFill>
    );
};
