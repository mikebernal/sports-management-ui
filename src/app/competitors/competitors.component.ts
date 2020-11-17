import { ActivatedRoute } from '@angular/router';
import { CompetitorsConfig } from './../classes/competitors-config';
import { CompetitorsService } from './../services/admin/competitors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})
export class CompetitorsComponent implements OnInit {
  competitor: any;
  competitors: CompetitorsConfig[];

  constructor(
    private competitorService: CompetitorsService,
    private activatedRoute: ActivatedRoute
  ) { }

ngOnInit() {

    this.activatedRoute.data.subscribe(
      (competitors) => {
        console.log(competitors);
      },
      (error) => {
        console.log(error);
      }
    );

    this.competitorService.getCompetitors().subscribe(
      (competitors) => {
        this.competitors = competitors;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
