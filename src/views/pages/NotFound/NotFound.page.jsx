import {memo,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Controller } from '~/controllers';
function NotFoundComponent(props){
    return (
        <Fragment>
            NotFound page
            <div><Link to={Controller.home.getAction()}>{Controller.home.title}</Link></div>
            <div><Link to={Controller.notfound.getAction()}>{Controller.notfound.title}</Link></div>
        </Fragment>
    )
};export default memo(NotFoundComponent)