import { Injectable } from "@angular/core";
import { Leader } from "../shared/leader";
import { of, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { baseURL } from '../shared/baseurl';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class LeaderService {
  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {}

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader []>(baseURL + 'leadership?featured=true').pipe(map(leaders=> leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
