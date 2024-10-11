/* eslint-disable react/prop-types */
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Entorno = ({estado, setEstado}) => {
    const {sectionActiva} = estado
    return(
        <Lightbox
            plugins={[Captions]}
            open={sectionActiva}
            close={() => {
                setEstado({...estado, sectionActiva:false})
                
            }}
            slides={[
                { src: new URL('../../assets/entorno/castro.jpg', import.meta.url).href, description:'Castro' },
                { src: new URL('../../assets/entorno/dalcahue.jpg', import.meta.url).href, description:'Dalcahue' },
                { src: new URL('../../assets/entorno/iglesia-castro.jpg', import.meta.url).href, description:'Iglesia Castro' },
                { src: new URL('../../assets/entorno/iglesia-dalcahue.jpg', import.meta.url).href, description:'Iglesia Dalcahue' },
                { src: new URL('../../assets/entorno/iglesia-rilan.jpg', import.meta.url).href, description:'Iglesia Rilán' },
                { src: new URL('../../assets/entorno/pueblo-rilan.jpg', import.meta.url).href, description:'Rilán' },
            ]}
        />
    )
}
export default Entorno