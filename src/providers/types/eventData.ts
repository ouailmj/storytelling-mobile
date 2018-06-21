import {DateTime} from "ionic-angular";

export interface ChoosePlanData{
    planKey: string;
}
export interface eventInformationData{
    description: string;
    title: string;
    place: string;
    startsAt: Date;
    endsAt: Date;
    idCat: number;
}