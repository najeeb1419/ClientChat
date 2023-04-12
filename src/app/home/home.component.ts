import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  submitted = false;


  constructor(private formBuilder: FormBuilder, private chatService: ChatService) {

  }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    })
  }

  submitForm() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.chatService.registerUser(this.userForm.value).subscribe(res => {
        console.log(res);
      })
    }
  }

}