import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  quiz: Quiz | undefined;
  ngOnInit(): void {
    this.getQuiz();
  }

  constructor(  private route: ActivatedRoute,
                private quizService: QuizService,
                private location: Location) {
  }
  getQuiz(): void {
    const ptf = String(this.route.snapshot.paramMap.get('ptf'));
    this.quizService.getQuiz(ptf)
      .subscribe(quiz => this.quiz = quiz);
  }
  goBack(): void {
    this.location.back();
  }
}
