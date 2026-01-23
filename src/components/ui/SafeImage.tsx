import React, { useState, useEffect } from 'react';
import { FALLBACK_IMAGE_URL } from '@/constants/config';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface BaseSafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    asMotion?: boolean;
    motionProps?: HTMLMotionProps<"img">;
}

export const SafeImage: React.FC<BaseSafeImageProps> = ({
    src,
    alt,
    className,
    onError,
    fallbackSrc = FALLBACK_IMAGE_URL,
    asMotion = false,
    motionProps = {},
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src);
    const [hasError, setHasError] = useState(false);

    // Reset state when src changes
    useEffect(() => {
        setImgSrc(src);
        setHasError(false);
    }, [src]);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackSrc);
            if (onError) {
                onError(e);
            }
        }
    };

    if (asMotion) {
        return (
            <motion.img
                src={imgSrc || fallbackSrc}
                alt={alt}
                className={className}
                onError={handleError}
                {...motionProps}
                {...(props as any)} // Still need cast for non-motion props passed to motion component compatibility if strict
            />
        );
    }

    return (
        <img
            src={imgSrc || fallbackSrc}
            alt={alt}
            className={className}
            onError={handleError}
            {...props}
        />
    );
};
