import { Component, Input } from '@angular/core';
import { HighlightPipe } from '../Pipes/highlight.pipe'; // تأكد من استيراد الـ Pipe

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [HighlightPipe], // إضافة الـ HighlightPipe هنا
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input() searchText: string = ''; // إدخال نص البحث

  name: string = 'Ahmad_Janajrah';
  department: string = 'Marketing Department';
  position: string = 'Junior Accounting Officer';
  manager: string = 'Salwa Assem';
  corporateLevel: number = 10;
  lifetime: string = '2.5 Years';
  vacationDaysLeft: number = 10;
  sickDaysLeft: number = 14;

  // تاريخ الطلبات
  type: string = 'Annual Vacation';
  startDate = '2/3/2023';
  endDate = '10/3/2023';
  days: number = 8;
  approvedBy: string = 'Hazem Azmi';
}
