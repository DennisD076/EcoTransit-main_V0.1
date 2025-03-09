import { HttpException } from '@/exceptions/HttpException';
import { openAIHelper } from '@/server';
import { isBase64Image } from '@/utils/data';
import { Service } from 'typedi';

@Service()
export class OpenaiService {
  public async validateImage(image: string): Promise<unknown> {
    if (!isBase64Image(image)) throw new HttpException(400, 'Invalid image format');

    const prompt = `
    Analyze the provided image. The image MUST meet ALL of the following criteria:
        1. It must clearly depict a valid ticket, receipt, or proof-of-purchase related specifically to public transportation (bus, train, tram, or metro).
        2. The image should be clear enough to identify key elements typically found on transportation tickets, such as dates, amounts, departure and/or arrival information, or transportation company branding.
        3. The date shown on the ticket or receipt must not be older than 14 days from today's date.
    
    You MUST respond ONLY with the following JSON object format as a REST API endpoint:
    {
      "validityFactor": {validityFactorNumber}, // 0-1 scale, 1 if all criteria are met, otherwise 0
      "descriptionOfAnalysis": "{analysis}" // Explain succinctly and clearly why the image does or does not meet the criteria. If invalid, guide the user briefly on what was missing or unclear without overly technical details.
    }
    `;
    

    const gptResponse = await openAIHelper.askChatGPTAboutImage({
      base64Image: image,
      prompt,
    });

    const responseJSONStr = openAIHelper.getResponseJSONString(gptResponse);

    return openAIHelper.parseChatGPTJSONString(responseJSONStr);
  }
}
// 2. It must not be a screenshot.
// 3. It must include the date of the purchase.
// 4. It must include the name of the store where the purchase was made.