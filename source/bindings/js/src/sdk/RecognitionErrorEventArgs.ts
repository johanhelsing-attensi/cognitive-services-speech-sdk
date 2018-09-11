//
// copyright (c) Microsoft. All rights reserved.
// licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//
import { RecognitionStatus } from "./RecognitionStatus";

/**
 * Defines content of a RecognitionErrorEvent.
 * @class
 */
export class RecognitionErrorEventArgs {
    /**
     * Specifies the error reason.
     * @property
     * @returns Specifies the error reason.
     */
    public status: RecognitionStatus;

    /**
     * Specifies the session identifier.
     * @property
     * @returns Specifies the session identifier.
     */
    public sessionId: string;

    /**
     * Contains additional information in case the status
     * indicates an error condition.
     * @property
     */
    public error: string;
}