
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  base_url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }  

  getEmployees() :any {

      console.log(this.httpClient.get(`${this.base_url}/employees`));
      return this.httpClient.get(`${this.base_url}/employees`);

  }
}
