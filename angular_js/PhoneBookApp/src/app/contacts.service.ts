import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contacts } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {			
  constructor(private http:HttpClient) { }
  baseUrl:string = 'http://localhost:3000/contacts';

          
    // Get All Contact		
    getContact(){					
      return this.http.get<contacts[]>(this.baseUrl);					
    }					
            
    // Get Contact By Id					
    getContactById(id: number){					
      return this.http.get<contacts>(this.baseUrl+'/'+id);					
    }			
   // Get User By name					
    getContactByLastName(lastName:string){					
        return this.http.get<contacts>(this.baseUrl+'/'+lastName);					
      }			
            
    // Create User					
    createContact(contacts:contacts) {					
      return this.http.post(this.baseUrl,contacts);					
    }		
  			
         // Modify User					
    updateContact(contacts:contacts) {					
        return this.http.put(this.baseUrl + '/' +contacts.id, contacts);					
      }		   
    // Delete User					
    deleteContact(id: number) {					
      return this.http.delete(this.baseUrl + '/' + id);					
    }
}
