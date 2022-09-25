import React,{useEffect,useState} from 'react'

const GithubProfile = () => {

  const [profile, setProfile] = useState({
    imageUrl:null,
    name: '',
    followers: 0,
    following: 0
  });

    useEffect(() => {
      fetch('https://api.github.com/users/sabeelhps')
        .then((res) => res.json())
        .then((data) => {
          setProfile({
            name: data.name,
            followers: data.followers,
            following: data.following,
            imageUrl:data.avatar_url
          })
        })
    })


    return (
      <div>
        {profile.imageUrl && <img src={profile.imageUrl} alt={profile.name} />}
        {profile.name && <h2>{profile.name}</h2>}
        {profile.followers && <p>followers : {  profile.followers}</p>}
        {profile.following && <p>following : {  profile.following}</p>}
      </div>
    )
}

export default GithubProfile;