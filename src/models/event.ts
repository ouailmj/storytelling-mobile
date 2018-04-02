import {Challenge} from "./challenge";

export class Event {
  title: string;
  startsAt: string;
  endsAt: string;
  description: string;
  privacy: string;
  challenges: [Challenge];

  has(){}
}
