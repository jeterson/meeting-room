import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';
import { MeetingRoomService } from 'src/app/services/meeting-room.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-create-update-room',
  templateUrl: './create-update-room.component.html',
  styleUrls: ['./create-update-room.component.css']
})
export class CreateUpdateRoomComponent implements OnInit {

  title = 'Create a new Room'
  dynamicForm!: NgForm;
  room: any = {}


  validateFields: Array<string> = ['name', 'date', 'startHour', 'endHour'];

  fields: PoDynamicFormField[] = [
    { order: 2, property: 'name', required: true, placeholder: 'Type name Room', gridColumns: 4 },
    { order: 3, property: 'date', required: true, type: 'date', format: 'dd/mm/yyyy', label: 'Date', gridColumns: 3 },
    { order: 4, property: 'startHour', required: true, type: 'time', format: 'hh:mm', label: 'Start Hour', gridColumns: 2 },
    { order: 5, property: 'endHour', required: true, type: 'time', format: 'hh:mm', label: 'End Hour', gridColumns: 2 },

  ]


  constructor(
    private service: MeetingRoomService,
    private poNotificationService: PoNotificationService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }


  onLoadFields(value: any) {
    const id = this.activateRoute.snapshot.params.id;

    if (id) {
      const field: PoDynamicFormField = { order: 1, property: 'id', disabled: true, gridColumns: 1 }
      return {
        fields: [field]
      }
    }
    return null


  }

  save() {
    if (this.room.id) {
      this.service.update(this.room).subscribe(res => {
        this.poNotificationService.success('The room meeting has been updated');
      })
    } else {
      this.service.create(this.room).subscribe(res => {
        this.poNotificationService.success('The room meeting has been created');
      })
    }


  }

  cancel() {
    this.router.navigateByUrl('/rooms')
  }



  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    if (!id) {
      return
    }
    this.service.findById(id).subscribe(res => {
      this.room = res;
    })
  }
}
