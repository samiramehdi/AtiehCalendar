import { Helmet } from 'react-helmet-async';
import './branches.less';
import { useEffect } from 'react';


export default function Branches(props) {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Helmet title="فهرست شعب"></Helmet>
            <section className="branch-map-container">
                <iframe src="https://atieh-broker.ir/static/map/index.html" title="شعب کارگزاری آتیه" frameborder="0" width="100%" height="100%"></iframe>
            </section>
        </>
    );
}
