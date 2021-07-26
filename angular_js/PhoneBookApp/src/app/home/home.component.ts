import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contacts } from '../contacts';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ContactList: contacts[]=[];

  constructor(private router: Router, private userService: ContactsService) { }

  // Initialize with default list of users	
  test: string;	
  						
    ngOnInit() {					
        this.userService.getContact()					
          .subscribe(data=> {
              data.sort((a, b) => {return a.firstName.toLowerCase()  > b.firstName.toLowerCase() ? 1 : -1;});
            this.ContactList= data;
          });
  }
      // Add New Contact
      createContact(): void {
        console.log("hiii");
        this.router.navigate(['createContact']);
  };
  //Delete user
    deleteContact(contacts:contacts): void {
    this.userService.deleteContact(contacts.id)
      .subscribe( data => {
        this.ContactList = this.ContactList.filter(u => u !== contacts);
      })
  };

   // Modify USer							
   updateContact(contacts:contacts): void {							
    localStorage.removeItem("contactId");							
    localStorage.setItem("contactId", contacts.id.toString());							
    this.router.navigate(['updateContact']);		
}

}