import { toast } from 'react-toastify';

const notificationSuccess = (text: string) => toast.success(text);
const notificationError = (text: string) => toast.error(text);
const notificationInfo = (text: string) => toast.info(text);
const notificationWarn = (text: string) => toast.warn(text);

export default {
  notificationSuccess,
  notificationError,
  notificationInfo,
  notificationWarn,
};
