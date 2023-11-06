const searchbynameform=document.getElementById('searchbynameform')
const inp=document.getElementById('searchinput')
const mydiv=document.getElementById('mydiv')
const API=('https://api.github.com/users/')


searchbynameform.addEventListener('submit',(e)=>{
    e.preventDefault(),
    searchByUsername()
})
searchByUsername=()=>{
fetch(API+inp.value)
.then(res=>res.json())
.then(data=>{
renderByUsername(data);


});
};

renderByUsername=(data)=>{
mydiv.innerHTML=""
const userimg =document.createElement('img'); 
userimg.src=data.avatar_url;
const followers=document.createElement('p');
followers.textContent=`Followers: ${data.followers}`;
const following=document.createElement('p');
following.textContent=`Following: ${data.following}`;
const publicrepos=document.createElement('p');
publicrepos.textContent=`Public repos: ${data.public_repos}`;
const username=document.createElement('h2');
username.textContent=`Username: ${data.name}`;
const bio=document.createElement('h5');
bio.textContent=`Bio: ${data.bio}`;
const location=document.createElement('p');
location.textContent=`Location✈: ${data.location}`;
const create=document.createElement('p');
create.textContent=`Created at: ${data.created_at}`;


mydiv.append(userimg,username,bio,followers,following,publicrepos,location,create);
};
