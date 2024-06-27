import style from "./style.module.css"

export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl, id}) {
    return (
        <div id={id} className={style.container}>
            <div className={style.person}>
                <img src={avatar} alt="img-avatar.png" className={style.avatar} />
                <h2>{name}</h2>
            </div>
            <div className={style.info}>
                <div className={style.bio}>
                    <h3>Bio:</h3>
                    <p>{bio}</p>
                </div>
                <div className={style.contact}>
                    <h3>contact:</h3>
                    <div className={style.contactChildren}>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>
                </div>
                <div className={style.socialMedias}>
                    <h3>social medias:</h3>
                    <div className={style.btns}>
                        <a href={githubUrl} target="_blank">
                            <button className={style.btn}>GitHub</button>
                        </a>
                        <a href={linkedinUrl} target="_blank">
                            <button className={style.btn}>Linkedin</button>
                        </a>
                        <a href={twitterUrl} target="_blank">
                            <button className={style.btn}>Twitter</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}