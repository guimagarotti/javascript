const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;
        
        if (error) {
            return onError(new Error('Erro no Login!'));
        }

        console.log("Usuário logado!");
        onSuccess ({ email });
    }, 1500);

        console.log("Receba!");
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: 'fortnite pro games', duration: '30 minutes'});
    }, 3000);
}
    
    const user = loginUser("guimagarotti@hotmail.com", "12345", (user) => {
        getUserVideos(user.email, (videos) => {
            console.log({videos});
            getVideoDetails(videos[0], (videoDetail) => {
                console.log(videoDetail);
            })
        })
    }, (error) => {
        console.log({error});
    });