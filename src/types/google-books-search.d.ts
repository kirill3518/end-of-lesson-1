declare module 'google-books-search' {

    export interface IOptions {
        // Google API key
        key?: string,
        // Search in a specified field
        field?: string,
        // The position in the collection at which to start the list of results (startIndex)
        offset?: number,
        // The maximum number of elements to return with this request (Max 40) (maxResults)
        limit?: number,
        // Restrict results to books or magazines (or both) (printType)
        type?: 'all' | 'books' | 'magazines',
        // Order results by relevance or newest (orderBy)
        order?: 'relevance' | 'newest',
        // Restrict results to a specified language (two-letter ISO-639-1 code) (langRestrict)
        lang?: 'en' | 'ru'
    }

    export interface IBook {
        title: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        industryIdentifiers: { type: string; identifier: string }[];
        pageCount: number;
        printType: 'BOOK' | 'MAGAZINE'
        categories: string[];
        averageRating: number;
        maturityRating: 'NOT_MATURE' | 'MATURE'
        language: string;
        id: string;
        link: string;
        thumbnail: string;
        // images: {};
    }

    type TCallback = (error: Error, result: IBook[]) => void

    export function search(query: string, callback: TCallback): void
    export function search(query: string, options: IOptions, callback: TCallback): void

}