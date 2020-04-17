export default interface Format {
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    url: string;
}

export type FormatType = 'thumbnail' | 'medium' | 'small';