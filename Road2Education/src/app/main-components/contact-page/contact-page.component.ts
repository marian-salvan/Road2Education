import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from 'src/app/modules/base-components/error-modal/error-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css',
      '../../shared/styles/commons.css']
})
export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;

  constructor(authService: AuthenticationService,
              private persistenceService: PersistenceService,
              private modalService: NgbModal,
              private router: Router) {
    authService.user.subscribe(user => {
      if (user === null) {
        return ;
      }

      this.contactForm.controls.name.setValue(user.firstName + ' ' + user.lastName);
      this.contactForm.controls.email.setValue(user.email);
    });
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(): void {
    this.persistenceService.post('contact', {
      fromName: this.contactForm.controls.name.value,
      fromEmail: this.contactForm.controls.email.value,
      subject: this.contactForm.controls.subject.value,
      message: this.contactForm.controls.message.value
    }).then(() => {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.title = 'Succes';
      modalRef.componentInstance.message = `Cererea ta a fost înregistrată cu succes!`;

      this.router.navigate(['/']);
    });
  }

}
