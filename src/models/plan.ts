export class Plan {
    id: number;
    name: string;
    planKey: string;
    description: string;
    price: number;
    maxEventDuration: number;
    maxUploads: number;
    maxGuests: number;
    maxAlbumLifeTime: number;
    enableChallenges: boolean;
    enableGamification: boolean;
}