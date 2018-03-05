export class Business {
    id: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: object;
    rating: number;
    coordinates: {
        latitude: number,
        longitude: number
    };
    transactions: string[];
    price: string; //TODO: enum with $, $$, $$$, $$$$
    location: {
        address1: string,
        city: string,
        zip_code: string,
        country: string,
        state: string,
        display_address: string[]
    };
    phone: string;
    display_phone: string;
    distance: number;
}