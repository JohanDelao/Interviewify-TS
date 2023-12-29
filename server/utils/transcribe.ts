import { OpenAI, toFile } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function transcribe(audios: any[]): Promise<Array<string>> {
  let transcriptions = [];

  for (const audio of audios) {
    const audioFile = await toFile(audio.buffer, 'audio.webm');
    await openai.audio.transcriptions
      .create({
        file: audioFile,
        model: 'whisper-1',
      })
      .then((response: any) => {
        transcriptions.push(response.text);
      })
      .catch((err) => console.log(`❌ Transcription error: ${err}`)); // TODO: handle error
  }
  return transcriptions;
}
