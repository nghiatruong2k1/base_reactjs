import { memo, useCallback } from 'react';
//---------//

import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../Search.module.css';
import {
  SearchStateType,
  useSelectorSearch,
  useDispatchSearch,
} from '../init.ts';
import { currentHistorySelector } from '../History/selecters.ts';
import { sliceReducerHistory } from '../History/reducers.ts';
import { sliceReducerQuery } from './reducers.ts';
import OptionItem from '../Option';
import clsx from 'clsx';
import { SearchOptionFace } from '../Option/init.ts';

export interface Props {}

function SearchInput({}: Props) {
  const dispath = useDispatchSearch();
  const value = useSelectorSearch((state: SearchStateType) => state?.query);
  const histories = useSelectorSearch((state: SearchStateType) =>
    currentHistorySelector(state?.query, state?.history),
  );
  const handleSubmit = useCallback(() => {
    dispath(sliceReducerHistory.actions.add({
      value:value,
      icon:<FontAwesomeIcon icon={['fas','search']}/>
    }));
  }, [value]);
  const handleChange = useCallback((e) => {
    dispath(sliceReducerQuery.actions.change(e.target.value));
  }, []);

  return (
    <Autocomplete
      freeSolo
      disablePortal
      fullWidth={true}
      options={histories}
      getOptionLabel={(option: SearchOptionFace) => option.value}
      renderOption={(props, option: SearchOptionFace) => {
        return <OptionItem {...props} option={option} />;
      }}
      renderInput={({ InputProps, ...params }) => {
        return (
          <TextField
            {...params}
            className={styles.root}
            fullWidth={true}
            size="small"
            placeholder="Please enter text"
            onChange={handleChange}
            InputProps={{
              ...InputProps,
              className: clsx(styles.outline, InputProps.className),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={['fas', 'search']} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        );
      }}
    />
  );
}
export default memo(SearchInput);
