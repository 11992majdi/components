import react from "react";
import ProfilePhoto from '../profile/rgnr.jpg';
function ProfilPhoto(){
    return(
        <div>
            <h2>ragnar</h2>
          <img style={{border:"10px solide red",borderRadius:"20px"}}
           src={ProfilePhoto} alt="photo"/>
        </div>
    )
}
export default ProfilPhoto;