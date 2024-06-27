import Profile from "./components/Profile/index.jsx";
import imgTutu from "./assets/img-tutu.png"
import imgAuau from "./assets/img-auau.png"
import imgNatalina from "./assets/img-natalina.png"

export default function App() {
    return (
        <>
            <Profile
            id={"profile-01"}
            avatar={imgTutu} 
            name={"Tutu Barão"} 
            bio={"Dono dos maiores bíceps dos seven seas, ganhador do mr. Olympia 2057 e presidente de atlanta."}
            phone={"+55 82 9946-8128"}
            email={"tutufortao69@gmail.com"}
            githubUrl={"https://github.com/andretffarias"}
            linkedinUrl={"https://www.linkedin.com/company/tutu-digital"}
            twitterUrl={"https://x.com"}
            />
            <Profile 
            id={"profile-02"}
            avatar={imgAuau} 
            name={"Auau Malvadão"} 
            bio={"bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla."}
            phone={"+55 82 9968-8128"}
            email={"auauMalvadao69@gmail.com"}
            githubUrl={"https://github.com/andretffarias"}
            linkedinUrl={"https://www.linkedin.com/company/tutu-digital"}
            twitterUrl={"https://x.com"}
            />
            <Profile 
            id={"profile-03"}
            avatar={imgNatalina} 
            name={"???"} 
            bio={"??????????."}
            phone={"+?? ??? ????-????"}
            email={"????????@gmail.com"}
            githubUrl={"https://github.com/andretffarias"}
            linkedinUrl={"https://www.linkedin.com/company/tutu-digital"}
            twitterUrl={"https://x.com"}
            />
        </>
    )
}