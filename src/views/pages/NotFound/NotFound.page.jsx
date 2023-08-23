import { Container, Stack, Typography } from '@mui/material';
import { memo, Fragment, useCallback } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { GetAction, Controller } from '~/controllers';
import { TitlePartial } from '~/views/partials';
import styles from './NotFound.module.css';
import { ButtonComponent } from '~/views/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function NotFoundComponent(props) {
  const { title } = useLoaderData();
  const navigator = useNavigate();
  const handleClickBackButton = useCallback(function () {
    navigator(-1);
  }, []);
  return (
    <Fragment>
      <TitlePartial>{title}</TitlePartial>
      <Container maxWidth={'100%'}>
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          spacing={1}
          mb={5}
        >
          <Typography className={styles.number}>404</Typography>
          <Typography className={styles.title}>PAGE NOT FOUNT</Typography>
          <Typography className={styles.description}>
            Oh no, We can't see the page you're looking for.
          </Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <ButtonComponent
              to="/"
              component={Link}
              variant="contained"
              className={styles.button}
              startIcon={<FontAwesomeIcon icon={['fas', 'home']} />}
            >
              <span className={styles.text}>Go Home</span>
            </ButtonComponent>
            <ButtonComponent
              to="#"
              onClick={handleClickBackButton}
              variant="contained"
              className={styles.button}
              startIcon={<FontAwesomeIcon icon={['fas', 'chevron-left']} />}
            >
              <span className={styles.text}>Go Back</span>
            </ButtonComponent>
          </Stack>
        </Stack>
      </Container>
    </Fragment>
  );
}
export default memo(NotFoundComponent);
