export const getShareUrl = (platform: 'twitter' | 'linkedin' | 'facebook', url: string, text: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    const links = {
        twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    };

    return links[platform];
};
