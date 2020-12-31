import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import {
  MultiDataSet,
  Label,
  Color,
  SingleDataSet,
  BaseChartDirective,
} from 'ng2-charts';
import { ITaskCount } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  // Pie
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [];
  taskTypeCount: Array<ITaskCount> = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private taskService: TaskService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit() {
    this.getTaskCount();
  }

  getTaskCount() {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.doughnutChartColor = [];
    this.taskService.getTypeCount().subscribe(
      (taskcount: Array<ITaskCount>) => {
        this.taskTypeCount = taskcount;
        taskcount.forEach((d) => {
          this.doughnutChartData.push(d.count);
          this.doughnutChartLabels.push(d.type);
        });
        this.doughnutChartColor.push({
          backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'],
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  refreshChart() {
    this.getTaskCount();
  }
}
