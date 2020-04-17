import Format from "./format";

export default interface Image {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Map<string, Format>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: {} | null;
    related: any[];
    created_at: Date;
    updated_at: Date;
}