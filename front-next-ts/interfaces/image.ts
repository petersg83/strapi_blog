import Format, {FormatType} from "./format";

export default interface Image extends Format {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    formats: { [name in FormatType]: Format };
    previewUrl: string | null;
    provider: string;
    provider_metadata: {} | null;
    related: any[];
    created_at: Date;
    updated_at: Date;
}