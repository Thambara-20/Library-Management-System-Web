

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function showSuccess(message) {
    toast.success(message, {
        position: toast.POSITION.TOP_LEFT,
    });
    
}

export function showError(message) {
  toast.error(message, {
    position: toast.POSITION.TOP_LEFT,
   
  });
}



 export default { showSuccess, showError };