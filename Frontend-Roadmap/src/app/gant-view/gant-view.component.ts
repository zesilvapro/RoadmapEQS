import { Component } from '@angular/core';



@Component({
  selector: 'app-gant-view',
  templateUrl: './gant-view.component.html',
  styleUrls: ['./gant-view.component.css']
})
export class GantViewComponent {

  getCurrentMonthAndYear(): string {
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const currentMonth = monthsOfYear[currentMonthIndex];

    return `${currentMonth} ${currentYear}`;
  }

  chartData = [
    ['Task', 'Start Date', 'End Date'],
    ['Project 1', new Date(2024, 4, 1), new Date(2024, 4, 5)],
    ['Project 2', new Date(2024, 4, 3), new Date(2024, 4, 8)],
    // Add more tasks as needed
  ];

  chartOptions = {
    height: 400,
    gantt: {
      trackHeight: 30
    }
  };
}
