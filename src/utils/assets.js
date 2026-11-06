export const getAssetUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
        return path;
    }
    const base = import.meta.env.BASE_URL || '/';
    // If base is '/portfolio/', prevent double prefixing if already prefixed
    const cleanBase = base.replace(/^\/|\/$/g, '');
    const cleanPath = path.replace(/^\//, '');
    if (cleanBase && cleanPath.startsWith(cleanBase + '/')) {
        return `/${cleanPath}`;
    }
    return `${base}${cleanPath}`;
};
