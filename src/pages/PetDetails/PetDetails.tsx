import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './PetDetails.module.css'

export function PetDetails(){
    return (
        <Grid>
        <div className={styles.container}></div>
        <Header showReturn={true}/>
        <h1>Detalhes do pet</h1>
        </Grid>
    )
}