import { useRouter } from 'next/router'
import styles from '../../styles/ResCard.module.css'
import {useState,useEffect} from 'react';
import zomato from '../api/zomato'
const Post = () => {
  const router = useRouter()
  const { resid } = router.query
  const [res, setRes] = useState();

  const searchApi = async (res)=>{
    try{
        const response = await zomato.get(`/restaurant?res_id=${res}`);
        setRes(response.data);
    }catch(err){
        console.log(err)
    }
  }

  useEffect(()=>{
    searchApi(resid)
  },[])

  return <div>
      <a className={styles.wrapper}>
                <div className={styles.details}>
                    PAGE NOT AVAILABLE
                </div>
            </a>
  </div>
}

export default Post

