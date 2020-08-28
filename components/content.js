import styles from '../styles/Content.module.css'
import Cuisines from './cuisines'
import { useEffect, useState } from 'react';
import zomato from '../pages/api/zomato'

function Content(props){
    const [zomData,setzomData]=useState();
    const [Cuisi,setCuisi]=useState([]);

    const searchApi = async (id,etype)=>{
        try{
            const response = await zomato.get(`location_details?entity_id=${id}&entity_type=${etype}`);
            setzomData(response.data);
            setCuisi(response.data.top_cuisines);
            console.log(zomData);
        }catch(err){
            console.log(err)
        }
      }

      useEffect(()=>{
        searchApi(props.loc.entity_id,props.loc.entity_type)
      },[])

    return(
        <div className={styles.mvscroll}>
            <Cuisines cuisines={Cuisi}/>
        </div>
    )
}

export default Content