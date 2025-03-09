import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { OpenaiService } from '@/services/openai.service';
import { Submission } from '@/interfaces/submission.interface';
import { HttpException } from '@/exceptions/HttpException';
import { ContractsService } from '@/services/contracts.service';

export class SubmissionController {
  public openai = Container.get(OpenaiService);
  public contracts = Container.get(ContractsService);

  public submitReceipt = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log('[SubmissionController1] Starting receipt submission process');
      const body: Omit<Submission, 'timestamp'> = req.body;
      console.log('[SubmissionController2] Received submission body:', JSON.stringify(body, null, 2));

      const submissionRequest: Submission = {
        ...body,
        timestamp: Date.now(),
      };
      console.log('[SubmissionController3] Created submission request with timestamp:', submissionRequest.timestamp);

      // Submission validation with smart contract
      console.log('[SubmissionController4] Validating submission with smart contract');
      try {
        await this.contracts.validateSubmission(submissionRequest);
        console.log('[SubmissionController5] Smart contract validation successful');
      } catch (contractError) {
        console.error('[SubmissionController6] Smart contract validation failed:', contractError);
        throw new HttpException(400, 'Invalid submission: Smart contract validation failed');
      }
//----------------------------------
      console.log('[SubmissionController7] Starting image validation with OpenAI');
      const validationResult = await this.openai.validateImage(body.image);
      console.log('[SubmissionController8] Received validation result:', JSON.stringify(validationResult, null, 2));

      if (validationResult == undefined || !('validityFactor' in (validationResult as object))) {
        console.error('[SubmissionController9] Invalid validation result structure:', validationResult);
        throw new HttpException(500, 'Error validating image: Invalid response structure');
      }

      const validityFactor = validationResult['validityFactor'];
      console.log('[SubmissionController10] Validity factor:', validityFactor);

      if (validityFactor > 0.5) {
        console.log('[SubmissionController11] SUCCEEEDDDDDD');
      //   console.log('[SubmissionController] Validity factor above threshold, proceeding with registration');
      //   try {
      //     const registrationSuccess = await this.contracts.registerSubmission(submissionRequest);
      //     if (!registrationSuccess) {
      //       console.error('[SubmissionController] Failed to register submission and send rewards');
      //       throw new HttpException(500, 'Error registering submission and sending rewards');
      //     }
      //     console.log('[SubmissionController] Successfully registered submission and sent rewards');
      //   } catch (registrationError) {
      //     console.error('[SubmissionController] Error during registration:', registrationError);
      //     throw new HttpException(500, 'Error during submission registration process');
      //   }
      // } else {
      //   console.log('[SubmissionController] Validity factor below threshold, skipping registration');
      }

      res.status(200).json({ validation: validationResult });
    } catch (error) {
      console.error('[SubmissionController12] Error in submitReceipt:', error);
      if (error instanceof HttpException) {
        next(error);
      } else {
        next(new HttpException(500, 'Internal server error during receipt submission'));
      }
      return;
    }
  };
}
