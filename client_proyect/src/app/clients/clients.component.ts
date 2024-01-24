import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];
  formulario: FormGroup = this.fb.group({
    nombre: [],
    email: []
})

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
   this.getAll();
  }

  getAll() {
    this.clientService.getAll()
    .subscribe((clients: any) => {
      console.log('clientes', clients);
      this.clients = clients._embedded.clients;
    })
  }

  save() {
    const values = this.formulario.value;

    console.log('values', values);

    this.clientService.create(values)
      .subscribe(() => {
        this.getAll();
      })
  }

}
