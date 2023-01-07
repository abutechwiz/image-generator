import { Configuration, OpenAIApi } from "openai";

export default function config(){
    const configuration = new Configuration({
        apiKey: "",
      });
      return configuration;
}


