import { 
    CasMismatchError, 
    CouchbaseError, 
    DocumentExistsError, 
    DocumentNotFoundError, 
    RequestCanceledError, 
    ServiceNotAvailableError, 
    TimeoutError, 
    ValueTooLargeError 
} from "couchbase";
import { RecordMutationResponse } from "src/graphql/generated-types";

export default function handleCouchbaseError(error: Error, id: string): RecordMutationResponse {
    if (!(error instanceof CouchbaseError)) {
      throw error;
    }
  
    if (error instanceof DocumentNotFoundError) {
      return {
        code: '404',
        success: false,
        message: `Document not found: ${error.message}`,
        id,
      };
    } else if (error instanceof CasMismatchError) {
      return {
        code: '409',
        success: false,
        message: `CAS mismatch: ${error.message}`,
        id,
      };
    } else if (error instanceof TimeoutError) {
      return {
        code: '504',
        success: false,
        message: `Timeout: ${error.message}`,
        id,
      };
    } else if (error instanceof RequestCanceledError) {
      return {
        code: '503',
        success: false,
        message: `Request canceled: ${error.message}`,
        id,
      };
    }  else if (error instanceof ServiceNotAvailableError) {
      return {
        code: '503',
        success: false,
        message: `Service not available: ${error.message}`,
        id,
      };
    } else if (error instanceof DocumentExistsError) {
      return {
        code: '409',
        success: false,
        message: `Document already exists: ${error.message}`,
        id,
      };
    } else if (error instanceof ValueTooLargeError) {
      return {
        code: '413',
        success: false,
        message: `Value too large: ${error.message}`,
        id,
      };
    } else {
      return {
        code: '500',
        success: false,
        message: `Unexpected error: ${error.message}`,
        id,
      };
    }
  }
  