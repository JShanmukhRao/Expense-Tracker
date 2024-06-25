export const transformCreateDate = (date: string): string => {
    return new Date(date).toLocaleDateString()
}