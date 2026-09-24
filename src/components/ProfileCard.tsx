import Image from "next/image";
import { profile } from "@/lib/profile-data";

export default function ProfileCard() {
  return (
    <div className="card glass">
      <div className="sweep" />
      <div>
        <div className="status-row">
          <span className="status-dot" />
          <span>{profile.role}</span>
        </div>
        <div className="avatar">
          <Image src={profile.avatar} alt={profile.nameJa} width={132} height={132} priority />
        </div>
        <h1>{profile.nameJa}</h1>
        <div className="romaji">
          {profile.nameRomaji} — &ldquo;{profile.nickname}&rdquo;
        </div>
        <p className="bio">{profile.bio}</p>
      </div>
      <div className="contact-col">
        <a className="email-btn" href={`mailto:${profile.email}`}>
          <span className="addr">{profile.email}</span>
          <span>→</span>
        </a>
        <div className="sns-grid">
          <a className="sns-link" href={profile.x.url} target="_blank" rel="noopener noreferrer">
            X / {profile.x.handle}
          </a>
          <a className="sns-link" href={profile.github.url} target="_blank" rel="noopener noreferrer">
            GITHUB / {profile.github.handle}
          </a>
          <a className="sns-link" href={profile.qiita.url} target="_blank" rel="noopener noreferrer">
            QIITA / {profile.qiita.handle}
          </a>
        </div>
      </div>
    </div>
  );
}
