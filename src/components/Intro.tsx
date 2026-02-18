
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile } from 'remotion';

export const Intro: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = interpolate(frame, [0, 30], [0, 1], {
        extrapolateRight: 'clamp',
    });

    const scale = spring({
        frame,
        fps,
        from: 0.5,
        to: 1,
        config: {
            damping: 10,
        },
    });

    return (
        <AbsoluteFill className="bg-[#F5F3FF] flex items-center justify-center">
            <div style={{ opacity, transform: `scale(${scale})` }} className="text-center">
                <img src={staticFile("seneka-logo.png")} alt="SENEKA" className="h-32 mx-auto mb-6 object-contain" />
            </div>
        </AbsoluteFill>
    );
};
