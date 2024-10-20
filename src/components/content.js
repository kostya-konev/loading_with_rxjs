import {EventsService} from "../services/events-service";
import { first } from "rxjs";

const contentTextEl = document.querySelector(".content__text");
const loaderTextEl = document.querySelector(".content__loader");

function subscribeToLoadedData() {
  EventsService.onLoadedData$
    .pipe(first())
    .subscribe(() => {
      showGreeting();
      hideLoading();
    })
}

function showGreeting() {
  contentTextEl.style.display = "block"
}

function hideLoading() {
  loaderTextEl.style.display = "none";
}

subscribeToLoadedData();