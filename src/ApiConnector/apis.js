/**
 * APIs for the application.
 * Export all API endpoint URLs and functions here.
 */

const API_BASE_URL = 'http://localhost:4000/api/v1';

// Example API endpoints
export const FEEDBACK = `${API_BASE_URL}/feedback`;
export const NEWPARTICIPANTS = `${API_BASE_URL}/newParticipants`;
export const CONTACTUS = `${API_BASE_URL}/contactus`;
export const MAKE_ENQUIRY = `${API_BASE_URL}/makeanEnquiry`;
export const GETFEEDBACK = `${API_BASE_URL}/getFeedback`;
export const GETHELP= `${API_BASE_URL}/getHelp`;

// Example API call functions (using fetch)

export default {
    FEEDBACK,
    NEWPARTICIPANTS,
    CONTACTUS,
    MAKE_ENQUIRY,
    GETFEEDBACK,
    GETHELP 
};