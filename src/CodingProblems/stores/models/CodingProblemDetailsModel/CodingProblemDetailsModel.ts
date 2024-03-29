import { observable } from 'mobx'

import { StatementModel } from '../StatementModel'
import { RoughSolutionModel } from '../RoughSolutionModel'
import { TestCaseModel } from '../TestCaseModel'
import { SolutionApproachModel } from '../SolutionApproachModel'
import { CleanSolutionModel } from '../CleanSolutionModel'
import { HintModel } from '../HintModel'

class CodingProblemDetailsModel {
   codingProblemId: number
   @observable statement: StatementModel
   @observable roughSolutions: Array<RoughSolutionModel>
   @observable testCases: Array<TestCaseModel>
   @observable prefilledCodes: Array<RoughSolutionModel>
   @observable solutionApproach: SolutionApproachModel | null
   @observable cleanSolutions: Array<CleanSolutionModel>
   @observable hints: Array<HintModel>

   constructor(codingProblemDetails) {
      this.codingProblemId = codingProblemDetails.question_id
      this.statement = new StatementModel(codingProblemDetails.statement)
      this.roughSolutions = codingProblemDetails.rough_solutions.map(
         roughSolution => {
            const uniqueId = Math.random().toString()
            return new RoughSolutionModel({
               uniqueId,
               roughSolutionDetails: roughSolution
            })
         }
      )
      this.testCases = codingProblemDetails.test_cases.map(testCaseDetails => {
         const uniqueId = Math.random().toString()
         return new TestCaseModel({ uniqueId, testCaseDetails })
      })
      this.prefilledCodes = codingProblemDetails.prefilled_codes.map(
         preFilledCode => {
            const uniqueId = Math.random().toString()
            return new RoughSolutionModel({
               uniqueId,
               roughSolutionDetails: preFilledCode
            })
         }
      )
      this.solutionApproach =
         codingProblemDetails.solution_approach !== null
            ? new SolutionApproachModel(codingProblemDetails.solution_approach)
            : null
      this.cleanSolutions = codingProblemDetails.clean_solutions.map(
         cleanSolutionDetails => {
            const uniqueId = Math.random().toString()
            return new CleanSolutionModel({ uniqueId, cleanSolutionDetails })
         }
      )
      this.hints = codingProblemDetails.hints.map(hintDetails => {
         const uniqueId = Math.random().toString()
         return new HintModel({ uniqueId, hintDetails })
      })
   }
}

export { CodingProblemDetailsModel }
