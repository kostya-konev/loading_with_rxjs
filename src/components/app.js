import { DataService} from "../services/data-service";
import { EventsService } from "../services/events-service";

function init() {
  DataService.loadData().subscribe(() => {
    EventsService.onLoadedData$.next();
  })
}

init();
