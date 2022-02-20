import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { EditQuizComponent } from "./quizzes/edit-quiz/edit-quiz.component";


const routes: Routes = [
  {path: 'quizlist', component: QuizListComponent},
  {path: 'quizform', component: QuizFormComponent},
  { path: '', redirectTo: '/quizlist', pathMatch: 'full' },
  {path: 'edit/:id', component: EditQuizComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}