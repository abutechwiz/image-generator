import config from "./config";
import { OpenAIApi } from "openai";

const openai = new OpenAIApi(config());

export default async function callAi(text) {
  try{
    const response = await openai.createImage({
      prompt: text,
      n: 4,
      size: "1024x1024",
    });
    const image_url = response.data.data[0].url;
    console.log(response.data);
    return image_url;

  }catch(err){
      console.log("error is happening");
      return "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000";
  }
}