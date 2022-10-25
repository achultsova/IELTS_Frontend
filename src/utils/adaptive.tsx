export function adaptive(
    startSize: number | string,
    endSize: number | string,
    min: number | string = 375,
    max: number | string = 1920,
): string {
    let minWidth = min
    let maxWidth = max
    if (typeof minWidth === 'string') {
        minWidth = +minWidth.replace('px', '')
    }
    if (typeof maxWidth === 'string') {
        maxWidth = +maxWidth.replace('px', '')
    }
    const addSize = +endSize - +startSize
    const width = +maxWidth - +minWidth
    return `calc(${startSize}px + ${addSize} * ((100vw - ${minWidth}px) / ${width}))`
}