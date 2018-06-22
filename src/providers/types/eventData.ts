
export interface ChoosePlanData{
    planKey: string;
}
export interface EventInformationData{
    description: string,
    title: string,
    place: string,
    startsAt: string,
    endsAt: string,
    idCat: number,
}

export interface ChallengeData{
    description: string,
    descriptionPropose: string
}
export interface PaymentData{
    cardNumber: string,
    experationDateMonth: string,
    experationDateYear: string,
    cvv: string,
    price: string,
}