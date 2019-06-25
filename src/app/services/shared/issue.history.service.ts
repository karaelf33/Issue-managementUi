import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueHistoryService {

  private ISSUE_HİSTORY_PATH = '/issue/history';

  constructor(private  apiService: ApiService) {
  }

  getAll(): Observable<any> {
    return this.apiService.get(this.ISSUE_HİSTORY_PATH).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.ISSUE_HİSTORY_PATH, id).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  createIssueHistory(IssueHistory): Observable<any> {
    return this.apiService.post(this.ISSUE_HİSTORY_PATH, IssueHistory).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

  delete(id): Observable<any> {
    return this.apiService.delete(this.ISSUE_HİSTORY_PATH, id).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return {};
        }
      }
    ));
  }

}
