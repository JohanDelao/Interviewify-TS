import interviewModel from '../Models/interviewModel';
import qa_feedbackModel from '../Models/qa_feedbackModel';

export async function getAllInterviews(userId) {
  const interviews = await interviewModel
    .find({ user_id: userId });

  // This means that map would return an array of promises of the results we want.
  const feedback = interviews.map(async (interview) => {
    const feedbacks = await qa_feedbackModel.find({
      interview_id: interview._id,
    });
    return {
      interview: interview,
      feedback: feedbacks
    }
  })
  
  // We can then use Promise.all to get the result when all the promises return.
  return Promise.all(feedback);
}