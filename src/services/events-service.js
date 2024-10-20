import { Subject} from "rxjs";

export class EventsService {
  static onLoadedData$ = new Subject();
}