export const sanitizeString = (value: string): string => {
    return value
        .trim()
        .replace(/\s+/g, " ")
        .replace(/<[^>]*>?/gm, "")
        .normalize("NFKC")
}