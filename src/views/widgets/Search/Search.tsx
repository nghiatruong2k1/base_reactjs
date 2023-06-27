import { memo } from 'react';
//---------//
import styles from './Search.module.css';
import SearchInput from './Input';
import SearchStates from './Search.states.tsx';

export interface Props {}

function SearchWidget({}: Props) {
  return (
    <SearchStates>
      <SearchInput />
    </SearchStates>
  );
}
export default memo(SearchWidget);
