export type Listing = {
    url: string;
    title: string;
    rating: string | null;
    description: string;
    price: string;
    link: string;
    booking_metadata: string;
    rating_word: string;
    rating_count: string | null; // Fixed typo: `stripg` → `string`
};

export type Result={
    content:{
        listings:Listing[];
        total_listings:string;
    }
}