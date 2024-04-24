import { Router } from 'express';
import dotenv from 'dotenv';
import { Schema } from 'mongoose';

//utils
import { saveToMongo } from '../utils/saveToMongo';
import { getLatestInterview } from '../utils/getLatestInterview';
import { getAllInterviews } from '../utils/getAllInterviews';

//configs
const router = Router();
dotenv.config();

router.post('/save-interview', async (req, res) => {
  const evaluations = req.body.evaluations;
  const position = req.body.position;

  try {
    const userId = (req.user as { _id: Schema.Types.ObjectId })._id;
    saveToMongo(userId, evaluations, position);
    res.status(200).send('Successfully saved to mongo');
  } catch (err) {
    res.status(400).send({ error: `❌ Mongo error: ${err}` });
  }
});

router.get('/get-interview', async (req, res) => {
  const userId = (req.user as { _id: Schema.Types.ObjectId })._id;
  const interviewID = req.query.interviewID as string | null;

  try {
    if (!interviewID) {
      const interview = await getLatestInterview(userId, null);
      res.status(200).send(interview);
    } else {
      const interview = await getLatestInterview(userId, interviewID);
      res.status(200).send(interview);
    }
  } catch (err) {
    res.status(400).send({ error: `❌ Mongo error: ${err}` });
  }
});

router.get('/get-all-interviews', async (req, res) => {
  const userId = (req.user as {_id: Schema.Types.ObjectId })._id;
  try {
    const interviews = await getAllInterviews(userId);
    res.status(200).send(interviews);
  } catch (err) {
    res.status(400).send({ error: `❌ Mongo error: ${err}` });
  }
});

export default router;
