import { EventsService } from "../services/events-service";
import { first} from "rxjs";

const sidebarTextEl = document.querySelector(".sidebar__text");
const loaderTextEl = document.querySelector(".sidebar__loader");

function subscribeToLoadedData() {
  EventsService.onLoadedData$
    .pipe(first())
    .subscribe(() => {
      showGreeting();
      hideLoading();
    })
}

function showGreeting() {
  sidebarTextEl.style.display = "block"
}

function hideLoading() {
  loaderTextEl.style.display = "none";
}

subscribeToLoadedData();