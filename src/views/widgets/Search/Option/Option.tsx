import { memo } from 'react';
//---------//
import styles from '../Search.module.css';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SearchOptionFace } from './init';

export interface Props {
  option: SearchOptionFace;
}

function HistoryItem({ option, ...props }: Props) {
  return (
    <ListItem {...props}>
      <ListItemIcon>{option.icon}</ListItemIcon>
      <ListItemText>{option.value}</ListItemText>
    </ListItem>
  );
}
export default memo(HistoryItem);
