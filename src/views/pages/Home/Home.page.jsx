import {memo,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Controller } from '~/controllers';
function HomeComponent(props){
    return (
        <Fragment>
            <Link to={Controller.home.getAction()}>{Controller.home.title}</Link>
            <Link to={Controller.notfound.getAction()}>{Controller.notfound.title}</Link>
        </Fragment>
    )
};export default memo(HomeComponent)