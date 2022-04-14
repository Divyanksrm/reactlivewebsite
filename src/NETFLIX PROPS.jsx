
import  React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';


ReactDOM.render(
    <React.Fragment>
        <Card img="http://wallpapercave.com/wp/wp4056410.jpg"
        title="A Netflix Orignal Series"
        sname="DARK"
        link='https://www.netflix.com/in/title/80100172'/>
        <Card img="https://wallpapercave.com/w/wp6075938.jpg"
        title="A Prime Orignal Series"
        sname="FAMILY MAN2"
        link='https://www.primevideo.com/detail/0H3DDB4KBJFNDCKKLHNRLRLVKQ/?ref_=dvm_pds_gen_in_as_s_gt_tfm2site_mkw_s-dc&mrntrk=pcrid_452516200052_slid_FHnYuajW_pgrid_105713381899_pgeo_9302239_x_180955810720_ptid_dsa-932982753595'/>
        <Card img="https://wallpapercave.com/w/wp6581315.jpg"
        title="A Netflix Orignal Series"
        sname="MONEY HEIST"
        link='https://www.netflix.com/in/title/80192098'/>
    </React.Fragment>,
    document.getElementById('root')
);