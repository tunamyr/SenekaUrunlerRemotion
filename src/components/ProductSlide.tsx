
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, staticFile } from 'remotion';

interface ProductSlideProps {
    title: string;
    description?: string;
    color?: string;
    logo?: string;
    titleColor?: string;
}

export const ProductSlide: React.FC<ProductSlideProps> = ({ title, description, color = "bg-slate-50", logo, titleColor }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleScale = spring({
        frame,
        fps,
        from: 0.8,
        to: 1,
        config: {
            damping: 12,
        },
    });

    const titleOpacity = spring({
        frame,
        fps,
        from: 0,
        to: 1,
        config: {
            damping: 12,
        },
    });

    // Description appears 20 frames later
    const descriptionOpacity = spring({
        frame: frame - 20,
        fps,
        from: 0,
        to: 1,
        config: {
            damping: 12,
        },
    });

    const descriptionTranslateY = spring({
        frame: frame - 20,
        fps,
        from: 50,
        to: 0,
        config: {
            damping: 12,
        },
    });

    return (
        <AbsoluteFill className={`${color} flex items-center justify-center`}>
            <div className="text-center px-20 max-w-6xl mx-auto">
                <div style={{ opacity: titleOpacity, transform: `scale(${titleScale})` }}>
                    {logo ? (
                        <img src={staticFile(logo)} alt={title} className="h-32 mx-auto mb-8 object-contain" />
                    ) : (
                        <h1 style={{ color: titleColor }} className={`text-7xl font-bold ${!titleColor ? 'text-slate-800' : ''} mb-8 drop-shadow-sm`}>{title}</h1>
                    )}
                </div>

                {description && (
                    <div style={{ opacity: descriptionOpacity, transform: `translateY(${descriptionTranslateY}px)` }}>
                        <p className="text-3xl text-slate-700 mt-4 whitespace-pre-line leading-relaxed">{description}</p>
                        <div className="w-1/3 h-2 bg-blue-500 mx-auto rounded-full mt-10 opacity-50"></div>
                    </div>
                )}
            </div>
        </AbsoluteFill>
    );
};
