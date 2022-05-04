const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error('Erro no login!'));
        }

        console.log("Usuário logado!");
        resolve({email, password});
    });
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideos");
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    });
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("getVideoDetails");
            resolve({title: 'fortnite gameplay', duration: '5 min'})
        }, 3000);
    });
};

/*
loginUser("gui@gmail.com", "12345")
    .then((user) => getUserVideos(user.email))
    .then((videos) => getVideoDetails(videos[0]))
    .then((videoDetails) => console.log({videoDetails}))
    .catch((error) => console.log({error}))
*/

const displayUser = async () => {
    try {
        const user = await loginUser('gui@gmail.com', '12345');
        const videos = await getUserVideos(user.email);
        const videoDetail = await getVideoDetails(videos[0]);
        console.log({videoDetail});
    } catch (error) {
        console.log({error});
    } 
}

displayUser();

