import { memo, useCallback, useEffect } from 'react';
import { Stack, Pagination, PaginationItem } from '@mui/material/';
interface Props {
  onChange?: Function | undefined;
  page?: number;
  total?: number;
  disabled?: boolean | undefined;
}
function PagingComponent({ total = 0, page = 0, onChange, disabled }: Props) {
  useEffect(() => {
    if (total >= 1 && page < 1) {
      onChange && onChange(1);
    } else if (total >= 1 && page > total) {
      onChange && onChange(total);
    }
  }, [page, total]);
  const handleChange = useCallback(
    (event, index) => {
      onChange && onChange(index >= total ? total : index);
    },
    [total],
  );
  if (total > 1) {
    return (
      <Stack py={1}>
        <Pagination
          onChange={handleChange}
          count={total}
          page={page}
          disabled={disabled}
        />
      </Stack>
    );
  } else {
    return <></>;
  }
}
export default memo(PagingComponent);
