import {memo,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Controller } from '~/controllers';
function HomeComponent(props){
    return (
        <Fragment>
            Home page
            <div><Link to={Controller.home.getAction()}>{Controller.home.title}</Link></div>
            <div><Link to={Controller.notfound.getAction()}>{Controller.notfound.title}</Link></div>
        </Fragment>
    )
};export default memo(HomeComponent)