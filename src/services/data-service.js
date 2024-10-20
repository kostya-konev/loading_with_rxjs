import { Observable} from "rxjs";

export class DataService {
  static loadData() {
    return new Observable(observer => {
      const someData = [];
      setTimeout(() => {
        observer.next(someData);
        observer.complete();
      }, 3000)
    });
  }
}