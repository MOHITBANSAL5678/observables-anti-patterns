import { Observable } from "rxjs";

export interface BaseService<T> {
    get(): Observable<T>;

}
