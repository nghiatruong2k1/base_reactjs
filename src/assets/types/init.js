import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const typeToast = {
  default: [<FontAwesomeIcon icon={['fas', 'bell']} />, 'Notification'],
  error: [<FontAwesomeIcon icon={['fas', 'bug']} />, 'Error'],
  success: [<FontAwesomeIcon icon={['fas', 'circle-check']} />, 'Success'],
  warning: [
    <FontAwesomeIcon icon={['fas', 'circle-exclamation']} />,
    'Warning',
  ],
  info: [<FontAwesomeIcon icon={['fas', 'circle-question']} />, 'Question'],
};
