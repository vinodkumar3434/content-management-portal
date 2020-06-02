import problemStatementResponse from '../../fixtures/postProblemStatementResponse.json'
import problemRoughSolutionResponse from '../../fixtures/postProblemRoughSolutionResponse.json'
import problemTestCaseResponse from '../../fixtures/postProblemTestCaseResponse.json'
import problemSolutionApproachResponse from '../../fixtures/postProblemSolutionApproachResponse.json'
import problemHintResponse from '../../fixtures/postProblemHintResponse.json'
import codingProblemsResponse from '../../fixtures/getCodingProblemsResponse.json'
import codingProblemDetailsResponse from '../../fixtures/getCodingProblemDetailsResponse.json'

class CodingProblemsFixture {
   postProblemStatementAPI(dataObject) {
      return new Promise((resolve, reject) => resolve(problemStatementResponse))
   }

   postProblemRoughSolutionAPI(dataObject) {
      return new Promise((resolve, reject) =>
         resolve(problemRoughSolutionResponse)
      )
   }

   deleteRoughSolutionAPI() {
      return new Promise((resolve, reject) => {
         resolve('Rough solution is deleted')
      })
   }

   postProblemTestCaseAPI() {
      return new Promise((resolve, _) => {
         resolve(problemTestCaseResponse)
      })
   }

   deleteTestCaseAPI() {
      return new Promise((resolve, _) => {
         resolve('Test case is deleted')
      })
   }

   postSolutionApproachAPI() {
      return new Promise((resolve, _) => {
         resolve(problemSolutionApproachResponse)
      })
   }

   postHintAPI() {
      return new Promise(resolve => {
         resolve(problemHintResponse)
      })
   }

   deleteHintAPI() {
      return new Promise(resolve => {
         resolve('Deleted successfully')
      })
   }

   getCodingProblemsAPI(codingProblemsOffset) {
      return new Promise((resolve, reject) => resolve(codingProblemsResponse))
   }

   getCodingProblemDetailsAPI() {
      return new Promise((resolve, reject) =>
         resolve(codingProblemDetailsResponse)
      )
   }
}

export { CodingProblemsFixture }
