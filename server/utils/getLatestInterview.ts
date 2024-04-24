import interviewModel from '../Models/interviewModel';
import qa_feedbackModel from '../Models/qa_feedbackModel';

export async function getLatestInterview(userId, interviewID: string | null) {
  if(interviewID !== null){
    const interview = await interviewModel.findOne({user_id: userId, _id: interviewID});
    const feedbacks = await qa_feedbackModel.find({
      interview_id: interview._id,
    })
    return feedbacks;
  } else {
    const interview = await interviewModel
      .findOne({ user_id: userId })
      .sort({ _id: -1 });

    const feedbacks = await qa_feedbackModel.find({
      interview_id: interview._id,
    });
    return feedbacks;
  }
}
