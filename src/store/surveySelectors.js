export function getIsQuestionCompleted(state, questionId) {
  return questionId in state.survey.responses;
}

export function getAnswer(state, questionId) {
  return state.survey.responses[questionId] || {};
}

export function getQuestion(state, questionId) {
  return state.survey.questions.byId[questionId] || {};
}

export function getSession(state) {
  return state.survey.session;
}

export function getCurrentQuestionId(state) {
  const {questions, session} = state.survey;
  return questions.allIds[
    Math.min(session.currentQuestionIndex, questions.allIds.length - 1)
  ];
}

export function getProgressItems(state) {
  const {questions, responses} = state.survey;
  const {allIds, byId} = questions;
  return allIds.map((id, index) => {
    const question = byId[id];
    const isCompleted = responses[id] && responses[id].answerValue != null;
    const maxRespondedQuestionCount = Object.values(responses).filter(
      response => response.answerValue != null,
    ).length;
    return {
      disabled: !(index <= maxRespondedQuestionCount || isCompleted),
      id,
      isCompleted,
      tooltip: question.text,
    };
  });
}
