import { observable } from 'mobx'
import { StatementModel } from '../StatementModel'
import { RoughSolutionModel } from '../RoughSolutionModel'
import { TestCaseModel } from '../TestCaseModel'

class CodingProblemDetailsModel {
   codingProblemId: number
   @observable statement: StatementModel
   @observable roughSolutions: Array<RoughSolutionModel>
   @observable testCases: Array<TestCaseModel>

   constructor(codingProblemDetails) {
      this.codingProblemId = codingProblemDetails.question_id
      this.statement = new StatementModel(codingProblemDetails.statement)
      this.roughSolutions = codingProblemDetails.rough_solutions.map(
         roughSolution => new RoughSolutionModel(roughSolution)
      )
      this.testCases = codingProblemDetails.test_cases.map(testCaseDetails => {
         const uniqueId = Math.random().toString()
         return new TestCaseModel({ uniqueId, testCaseDetails })
      })
   }
}

export { CodingProblemDetailsModel }
