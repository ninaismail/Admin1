import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


import { StudentsTableData } from 'app/@core/data/students-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent{


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'ID',
        type: 'number',
      },
      Firstname: {
        title: 'First Name',
        type: 'string',
      },
      Lastnamre: {
        title: 'Last Name',
        type: 'string',
      },
      Username: {
        title: 'Username',
        type: 'string',
      },
      Email: {
        title: 'Email',
        type: 'string',
      },     
      class: {
        title: 'Class',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();;
  students: any[];
  id: number = 1;
  details={
    _id: {
      title: 'ID',
      type: 'number',
    },
    Firstname: {
      title: 'First Name',
      type: 'string',
    },
    Lastnamre: {
      title: 'Last Name',
      type: 'string',
    },
    Username: {
      title: 'Username',
      type: 'string',
    },
    Email: {
      title: 'Email',
      type: 'string',
    },     
    class: {
      title: 'Class',
      type: 'string',
    },
    age: {
      title: 'Age',
      type: 'number',
    }
  } 
  constructor(private service: StudentsTableData) {
    
    this.service.getData().subscribe((res) => {
      this.source.load(res.data);
    });
 
  }
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }    
  onEditConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }    
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
